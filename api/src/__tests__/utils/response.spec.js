import { expect } from "@jest/globals";
import response from "../../helpers/response";

const { failed: failedResponse, success: successResponse } = response;
const data = {
  name: "Hafizferanmi",
  class: "JSS1",
};

describe("Check Failed/Success response", () => {
  test("it should check value of SUCCESS response", () => {
    const { result, message, success } = successResponse(data);

    expect(result).toEqual(data);
    expect(message).toBe("successful");
    expect(success).toBe(true);
  });

  test("it should check value of FAILED response", () => {
    const { result, message, success } = failedResponse("Error occured");

    expect(result).toBe(null);
    expect(message).toBe("Error occured");
    expect(success).toBe(false);
  });
});
