import { expect } from "@jest/globals";
import _ from "lodash";
import JWT from "../../helpers/jwt";
import { jwtSecret } from "../../config/default.json";

const { generateAuthToken, verifyAuthToken } = JWT;

describe("should generate and verify auth tokenc ", () => {
  let token;
  const credentials = 12345;
  test("should generate new auth token", () => {
    token = generateAuthToken(credentials, jwtSecret);

    expect(token).toBeTruthy();
    expect(_.size(_.split(token, "."))).toBe(3);
  });

  test("should verify user auth token", () => {
    const { id } = verifyAuthToken(token, jwtSecret);

    expect(id).toBe(credentials);
  });
});
