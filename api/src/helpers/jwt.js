import jwt from "jsonwebtoken";
import config from "../helpers/config";

const JWT_SECRET = config.JWT_SECRET;

const generateAuthToken = (id, secret = JWT_SECRET) =>
  jwt.sign({ id }, secret, {
    expiresIn: "12h", // token expires in 12 hours
  });

const verifyAuthToken = (token, secret = JWT_SECRET) =>
  jwt.verify(token, secret);

const getTokenFromHeader = (header) => header.replace("Bearer: ", "");

export default {
  generateAuthToken,
  verifyAuthToken,
  getTokenFromHeader,
};
