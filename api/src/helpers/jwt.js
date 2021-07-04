import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWTSECRET;

const generateAuthToken = (id) =>
  jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "12h", // token expires in 12 hours
  });

const verifyAuthToken = (token) => jwt.verify(token, JWT_SECRET);

const getTokenFromHeader = (header) => header.replace("Bearer: ", "");

export default {
  generateAuthToken,
  verifyAuthToken,
  getTokenFromHeader,
};
