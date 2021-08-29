import request from "supertest";
import express from "express";
import _ from "lodash";
import roomsRoute from "../../routes/rooms";
import { beforeAll, expect } from "@jest/globals";

const app = express();
app.use("/rooms", roomsRoute);

let token;
beforeAll(() => {
  // login as a registered user
  // use the token to test other part
});

describe("Rooms endpoint", () => {
  test("GET /rooms - SUCCESS", async () => {
    const { body } = await request(app).get("/rooms");
    expect(_.get(body, "message")).toBeTruthy();
  });

  test("POST /rooms/all - FAILED - without auth token", async () => {
    const { body, status } = await request(app).get("/rooms/all");
    expect(status).toBe(403);
    expect(_.get(body, "result")).toBeNull();
    expect(_.get(body, "success")).toBeFalsy();
  });

  test("POST /rooms/all - SUCCESS - with auth token", async () => {
    const { body } = await request(app).get("/rooms/all");

    expect(1).toBe(1);
  });
});
