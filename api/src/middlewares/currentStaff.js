import Debug from "debug";
import helpers from "../helpers";
import Staff from "../models/staff";

const { verifyAuthToken, getTokenFromHeader } = helpers.jwt;
const { failed } = helpers.response;

const debug = Debug("API: currentStaff.js");

const currentStaff = async (req, res, next) => {
  debug("currentStaff()");

  const authToken = req.get("Authorization");
  if (!authToken) return res.status(403).json(failed("Unauthorized"));

  let decodedToken;
  try {
    const token = getTokenFromHeader(authToken);
    decodedToken = verifyAuthToken(token);
  } catch (e) {
    return res.status(403).json(failed("Unauthorized error!"));
  }

  if (!decodedToken || !decodedToken.id)
    return res.status(403).json(failed("Unauthorized"));

  try {
    let staff = await Staff.findById(decodedToken.id);
    if (!staff) return res.status(403).json(failed("Unauthorized"));

    staff = staff.toObject();
    delete staff.password;

    req.staff = staff;
    next();
  } catch (e) {
    return res.json(
      failed("Big problem ooo, but we looking to find a fix soon.")
    );
  }
};

export default currentStaff;
