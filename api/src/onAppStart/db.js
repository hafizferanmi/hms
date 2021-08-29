import mongoose from "mongoose";
import Debug from "debug";
import config from "../helpers/config";
import { isProduction } from "../helpers/env";

const debug = Debug("API:onAppStart/db.js");

const dbSetup = () => {
  debug("dbSetup()");

  if (isProduction) {
    mongoose.set("debug", true);
  }

  mongoose
    .connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => debug("Connected to database"))
    .catch((err) => debug("Issue with DB connection", err));
};

export default dbSetup;
