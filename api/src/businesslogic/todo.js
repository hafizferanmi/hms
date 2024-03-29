import Debug from "debug";
import Todo from "../models/todo";
import helpers from "../helpers";
import _ from "ramda";
import ValidationSchemas from "../ValidationSchemas";
import { TODOS_REMINDER_AT } from "../constants/misc";

const debug = Debug("API:businessLogic/todo.js");

const { TodoSchema } = ValidationSchemas;
const { success, failed } = helpers.response;
const { validateRequestBody } = helpers.misc;

export const addTodo = async (req, res) => {
  debug("addTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;

  const { value, errorMsg } = validateRequestBody(TodoSchema, req.body);

  if (errorMsg) return res.json(failed(errorMsg));
  const { reminderAt, restInput } = value;

  const todoDetails = {
    ...restInput,
    createdBy: staffId,
    companyId,
  };

  if (!_.length(reminderAt))
    todoDetails.reminderAt = [TODOS_REMINDER_AT.FIFTEEN_MIN_BEFORE];

  try {
    const todo = new Todo(todoDetails);
    return res.json(success(todo));
  } catch (e) {
    return res.json(failed("Error occured. Could not create todo"));
  }
};

export const updateTodo = async (req, res) => {
  debug("updateTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;
  const todoId = req.params.todoId;

  const { value, errorMsg } = validateRequestBody(TodoSchema, req.body);

  if (errorMsg) return res.json(failed(errorMsg));

  const todoDetails = {
    ...value,
    updatedBy: staffId,
    companyId,
  };

  try {
    const todo = await Todo.findOneAndUpdate(
      { companyId, todoId },
      todoDetails,
      { new: true }
    );
    return res.json(success(todo));
  } catch (e) {
    return res.json(failed("Error occured. Could not update todo"));
  }
};

export const pinTodo = async (req, res) => {
  debug("pinTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;
  const todoId = req.params.todoId;
  const { pinned } = req.body;

  const conditions = { companyId, todoId, createdBy: staffId };

  const set = {
    pinned,
  };

  try {
    const todo = await Todo.findOneAndUpdate(conditions, set, { new: true });
    return res.json(success(todo));
  } catch (e) {
    return res.json(failed("Error occured. Could not pin todo"));
  }
};

export const completeTodo = async (req, res) => {
  debug("completeTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;
  const todoId = req.params.todoId;
  const { completed } = req.body;

  const conditions = { companyId, todoId, createdBy: staffId };

  const set = {
    completed,
    completedAt: completed ? Date.now() : null,
  };

  try {
    const todo = await Todo.findOneAndUpdate(conditions, set, { new: true });
    return res.json(success(todo));
  } catch (e) {
    return res.json(failed("Error occured. Could not complete todo"));
  }
};

export const getAllTodo = async (req, res) => {
  debug("getAllTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;

  // Todo: filter todos by different search criterias

  const conditions = { companyId, createdBy: staffId };

  try {
    const todos = await Todo.find(conditions);
    return res.json(success(todos));
  } catch (e) {
    return res.json(failed("Error occured. Could not get todos"));
  }
};

export const getTodo = async (req, res) => {
  debug("getTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;
  const todoId = req.params.todoId;

  try {
    const todos = await Todo.find({
      companyId,
      createdBy: staffId,
      _id: todoId,
    });
    return res.json(success(todos));
  } catch (e) {
    return res.json(failed("Error occured. Could not get todo"));
  }
};

export const deleteTodo = async (req, res) => {
  debug("deleteTodo()");
  const companyId = req.staff.companyId;
  const staffId = req.staff._id;
  const todoId = req.params.todoId;

  try {
    const todos = await Todo.findOneAndDelete({
      companyId,
      createdBy: staffId,
      _id: todoId,
    });
    return res.json(success(todos));
  } catch (e) {
    return res.json(failed("Error occured. Could not get todo"));
  }
};
