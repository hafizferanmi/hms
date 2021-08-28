import { expect } from "@jest/globals";
import _ from "lodash";
import JWT from "../../helpers/jwt";
import { jwtSecret } from "../../src/helpers/jwt";

const { generateAuthToken, verifyAuthToken } = JWT;

describe("should generate and verify auth tokenc ", () => {
  test("should generate new auth token", () => {
    const token = generateAuthToken(12345, jwtSecret);

    expect(token).toBeTruthy();
    expect(_.size(_.split(token, "."))).toBe(3);
  });

  test("should verify user auth token", () => {
    const { id } = verifyAuthToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDUsImlhdCI6MTYzMDA3MzE4MiwiZXhwIjoxNjMwMTE2MzgyfQ.v6pSIQP1MxsIWu2tEvl0YNYB6tezZ2vMOahJjH1WzHY",
      jwtSecret
    );

    expect(id).toBe(12345);
  });
});
