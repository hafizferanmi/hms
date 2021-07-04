import Joi from "joi";
import _ from "ramda";
import { TODOS_REMINDER_AT } from "../constants/misc";

import { stringSchema } from "./helpers";

const schema = Joi.object().keys({
  title: stringSchema().label("Todo title").required(),

  desc: stringSchema().label("Todo description"),

  reminderAt: Joi.array()
    .items(Joi.string().valid(..._.values(TODOS_REMINDER_AT)))
    .label("Reminder at")
    .required(),

  toBeCompletedAt: stringSchema().label("Completed at").required(),

  completed: Joi.boolean().label("Completed").default(false),

  pinned: Joi.boolean().label("Pinned").default(false),

  starred: Joi.boolean().label("Starred").default(false),
});

export default schema;
