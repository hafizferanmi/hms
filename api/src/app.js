import express from "express";
import Debug from "debug";
import cors from "cors";
// eslint-disable-next-line
import _ from "./helpers/env";
import onAppStart from "./onAppStart";
import routes from "./routes";
import { isProduction } from "./helpers/env";
import config from "./helpers/config";

const port = config.PORT;

onAppStart();
const debug = Debug("API:app.js");
const app = express();
const {
  adminRoutes,
  companyRoutes,
  staffRoutes,
  roomsRoute,
  roomTypesRoute,
  checkInroute,
  hallsRoute,
  hallBookingRoute,
  settingsRoute,
  bulkUploadRoute,
  emailTemplate,
  dashboardRoute,
} = routes;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

app.use("/admin", adminRoutes);
app.use("/company", companyRoutes);
app.use("/staff", staffRoutes);
app.use("/rooms", roomsRoute);
app.use("/roomTypes", roomTypesRoute);
app.use("/checkIn", checkInroute);
app.use("/hall", hallsRoute);
app.use("/booking", hallBookingRoute);
app.use("/settings", settingsRoute);
app.use("/bulkUpload", bulkUploadRoute);
app.use("/emailTemplate", emailTemplate);
app.use("/dashboard", dashboardRoute);

app.get("/", (req, res) => res.json({ message: "Welcome!" }));

app.listen(port, () => {
  isProduction && console.log("Server is up and running on port " + port);
  debug("Server is up and running on port " + port);
});
