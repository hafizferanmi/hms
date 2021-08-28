import request from "supertest";
import express from "express";

const app = express();
const message = "successful";
app.get("/", (req, res) => {
  return res.json({ message });
});

describe("GET / - get the index route", () => {
  test("responds with success message", async () => {
    const { body } = await request(app).get("/");
    expect(body.message).toBe(message);
  });
});
