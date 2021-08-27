import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWTSECRET;

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
