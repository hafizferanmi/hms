import { expect } from "@jest/globals";
import _ from "lodash";
import passwordHelpers from "../../helpers/password";

const { hashPassword, isCorrectPassword } = passwordHelpers;

describe("Check to validate password helper functions", () => {
  const secret = "secret";
  let hashedSecret;

  test("it should check if password is properly hashed", async () => {
    hashedSecret = await hashPassword(secret);

    expect(hashedSecret).toBeTruthy();
  });

  test("it should check is password is correct", async () => {
    const isCorrect = await isCorrectPassword(secret, hashedSecret);

    expect(isCorrect).toBe(true);
  });
});
