import { expect } from "@jest/globals";
import _ from "lodash";
import passwordHelpers from "../../helpers/password";

const { hashPassword, isCorrectPassword } = passwordHelpers;
const secret = "secret";
const hashedSecret =
  "$2a$10$Vf3Td2Utmo2SZssxFTp9tOIGCmuFCtYm1iKSTvHeh.xKp0RZrbMFG";

describe("Check to validate password helper functions", () => {
  test("it should check if password is properly hashed", async () => {
    const hashFromSecret = await hashPassword(secret);

    expect(hashFromSecret).toBeTruthy();
  });

  test("it should check is password is correct", async () => {
    const isCorrect = await isCorrectPassword(secret, hashedSecret);

    expect(isCorrect).toBe(true);
  });
});
