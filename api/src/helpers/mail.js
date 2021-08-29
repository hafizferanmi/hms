import mailgun from "mailgun-js";
import Debug from "debug";
import config from "../helpers/config";

const debug = Debug("API: mail.js");

const apiKey = config.MAILGUN_API_KEY;
const domain = config.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey, domain });

const sendMail = async ({ from, to, subject, text }) => {
  debug("sendMail()");
  try {
    await mg.messages().send({ from, to, subject, text });
    debug("Mail sent");
    return true;
  } catch (e) {
    debug("Mail not sent");
    return false;
  }
};

export default sendMail;
