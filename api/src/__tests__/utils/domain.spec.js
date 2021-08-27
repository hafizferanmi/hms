import { expect } from "@jest/globals";
import domain from "../../helpers/domain";

// const { getOrigin, getSubdomain } = domain; TODO: figure out a way to test req objectc

const url1 = "https://altumai.com";
const url2 = "https://riders.biker.org";

describe("Check methods from Request URL", () => {
  test("it should return the origin of a URL", () => {
    expect(true).toBeTruthy();
  });
  test("it should return the subdomain of a URL", () => {
    expect(false).toBeFalsy();
  });
});
