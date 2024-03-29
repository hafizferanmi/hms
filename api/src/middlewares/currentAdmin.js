import Debug from "debug";
import helpers from "../helpers";
import Admin from "../models/admin";

const { verifyAuthToken, getTokenFromHeader } = helpers.jwt;
const { failed } = helpers.response;

const debug = Debug("API:middlewares/currentAdmin.js");

const currentAdmin = async (req, res, next) => {
  debug("currentAdmin()");
  const authToken = req.get("Authorization");
  if (!authToken) {
    return res.json(failed("Unauthorized"));
  }

  let decodedToken;
  try {
    const token = getTokenFromHeader(authToken);
    decodedToken = verifyAuthToken(token);
  } catch (e) {
    return res.status(403).json(failed("Unauthorized error!"));
  }

  if (!decodedToken || !decodedToken.id) {
    return res.json(failed("Unauthorized"));
  }

  let admin;
  try {
    admin = await Admin.findById(decodedToken.id);
  } catch (e) {
    return req.json(failed("Unauthorized"));
  }

  if (!admin) {
    return res.json(failed("Unauthorized"));
  }
  req.admin = admin;
  next();
};

export default currentAdmin;
