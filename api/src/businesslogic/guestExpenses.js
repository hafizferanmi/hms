import Debug from "debug";
import GuestExpenses from "../models/guestExpenses";
import helpers from "../helpers";
import ValidationSchemas from "../ValidationSchemas";
import { GUEST_EXPENSES_TYPE } from "../constants/misc";

const debug = Debug("API:businesslogic/guestExpenses.js");

const { failed, success } = helpers.response;
const { validateRequestBody } = helpers.misc;
const { GuestExpensesSchema } = ValidationSchemas;

export const addExpenses = async (req, res) => {
  debug("addExpenses()");
  const companyId = req.staff.companyId;
  const staffRole = req.staff.role;
  const currentStaffId = req.staff._id;
  const checkInId = req.params.checkInId;
  const { value, errorMsg } = validateRequestBody(
    GuestExpensesSchema,
    req.body
  );

  if (errorMsg) {
    return res.json(failed(errorMsg));
  }

  const { desc, note, paymentStatus, paymentMethod, ammount } = value;
  const expenseData = {
    checkInId,
    desc,
    typeOfExpense: GUEST_EXPENSES_TYPE[staffRole],
    note,
    payment: {
      ammount,
      status: paymentStatus,
      method: paymentMethod,
    },
    createdBy: currentStaffId,
    companyId,
  };

  try {
    let expense = new GuestExpenses(expenseData);
    expense = await expense.save();
    return res.json(success(expense));
  } catch (e) {
    return res.json(failed("Error occured, could not add guest expense"));
  }
};

export const updateExpenses = async (req, res) => {
  debug("updateExpenses()");
  const companyId = req.staff.companyId;
  const currentStaffId = req.staff._id;
  const checkInId = req.params.checkInId;
  const expenseId = req.params.expenseId;
  const { value, errorMsg } = validateRequestBody(
    GuestExpensesSchema,
    req.body
  );

  if (errorMsg) {
    return res.json(failed(errorMsg));
  }

  const { desc, note, paymentStatus, paymentMethod, ammount } = value;
  const expenseData = {
    checkInId,
    desc,
    note,
    payment: {
      ammount,
      status: paymentStatus,
      method: paymentMethod,
    },
    createdBy: currentStaffId,
    companyId,
  };

  const conditions = {
    _id: expenseId,
    checkInId,
  };

  try {
    const expense = await GuestExpenses.findOneAndUpdate(
      conditions,
      expenseData,
      { new: true }
    );
    return res.json(success(expense));
  } catch (e) {
    return res.json(failed("Error occured, could not update guest expense."));
  }
};

export const getAllExpenses = async (req, res) => {
  debug("updateExpenses()");
  const companyId = req.staff.companyId;

  // todo: Filtering of expenses with respect to day, month, room, department, etc

  try {
    const expenses = await GuestExpenses.find({ companyId });
    return res.json(success(expenses));
  } catch (e) {
    return res.json(failed("Error occured. Could not fetch expenses."));
  }
};

export const getExpensesByCheckIn = async (req, res) => {
  debug("getExpensesByCheckIn()");
  const companyId = req.staff.companyId;
  const checkInId = req.params.checkInId;

  try {
    const expenses = await GuestExpenses.find({ checkInId, companyId });
    return res.json(success(expenses));
  } catch (e) {
    return res.json(failed("Error occured. Could not get expenses"));
  }
};

export const getSingleExpense = async (req, res) => {
  debug("getSingleExpense()");
  const companyId = req.staff.companyId;
  const expenseId = req.params.expenseId;

  try {
    const expense = await GuestExpenses.find({ _id: expenseId, companyId });
    return res.json(success(expense));
  } catch (e) {
    return res.json(failed("Error occured. Could not get expense."));
  }
};

export const deleteExpense = async (req, res) => {
  debug("deleteExpense()");
  const companyId = req.staff.companyId;
  const expenseId = req.params.expenseId;
  const staffId = req.staff._id;

  try {
    let expense = await GuestExpenses.findOne({ _id: expenseId, companyId });
    if (!expense) return res.json(failed("Expense not found."));
    expense = GuestExpenses.delete(staffId);
    return res.json(success(expense));
  } catch (e) {
    return res.json(failed("Error occured. Could not get expense."));
  }
};
