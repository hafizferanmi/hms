import supertest from "supertest";
import express from "express";
import staffRoutes from "../../routes/staff";
import { describe, expect, test } from "@jest/globals";

const app = express();

describe("Auth route", () => {
  test("LOGIN", async () => {
    expect(1).toBe(1);
  });
});
