import Debug from "debug";
import EmailTemplate from "../models/emailTemplates";
import helpers from "../helpers";
import ValidationSchemas from "../ValidationSchemas";

const debug = Debug("API:businesslogic/emailTemplate.js");

const { failed, success } = helpers.response;
const { validateRequestBody } = helpers.misc;
const { EmailTemplateSchema } = ValidationSchemas;

export const addEmailTemplate = async (req, res) => {
  debug("addEmailTemplate()");
  const companyId = req.staff.companyId;
  const currentStaffId = req.staff._id;
  const { value, errorMsg } = validateRequestBody(
    EmailTemplateSchema,
    req.body
  );

  if (errorMsg) {
    return res.json(failed(errorMsg));
  }

  const emailTemplateData = {
    ...value,
    companyId,
    createdBy: currentStaffId,
  };

  try {
    let emailTemplate = new EmailTemplate(emailTemplateData);
    emailTemplate = await emailTemplate.save();
    return res.json(success(emailTemplate));
  } catch (e) {
    return res.json(failed("Error Occured, could not create email template."));
  }
};

export const updateEmailTemplate = async (req, res) => {
  debug("updateEmailTemplate()");
  const companyId = req.staff.companyId;
  const currentStaffId = req.staff._id;
  const templateId = req.params.templateId;
  const { value, errorMsg } = validateRequestBody(
    EmailTemplateSchema,
    req.body
  );

  if (errorMsg) {
    return res.json(failed(errorMsg));
  }

  const emailTemplateData = {
    ...value,
    companyId,
    updatedBy: currentStaffId,
  };

  const conditons = {
    companyId,
    _id: templateId,
  };
  try {
    const emailTemplate = await EmailTemplate.findOneAndUpdate(
      conditons,
      emailTemplateData,
      { new: true }
    );
    return res.json(success(emailTemplate));
  } catch (e) {
    return res.json(failed("Error Occured, could not update email template."));
  }
};

export const getEmailTemplate = async (req, res) => {
  debug("getEmailTemplate()");
  const companyId = req.staff.companyId;
  const templateId = req.params.templateId;

  try {
    const template = await EmailTemplate.findOne({
      _id: templateId,
      companyId,
    });
    return res.json(success(template));
  } catch (e) {
    return es.json(failed("Error occured, could not fetch email template"));
  }
};

export const getEmailTemplates = async (req, res) => {
  debug("getEmailTemplates()");
  const companyId = req.staff.companyId;
  const templateId = req.params.templateId;

  try {
    const templates = await EmailTemplate.find({ _id: templateId, companyId });
    return res.json(success(templates));
  } catch (e) {
    return res.json(failed("Error occured, could not fetch email templates"));
  }
};

export const deleteEmailTemplate = async (req, res) => {
  debug("deleteEmailTemplate()");
  const companyId = req.staff.companyId;
  const templateId = req.params.templateId;

  try {
    const template = await EmailTemplate.findOneAndDelete({
      _id: templateId,
      companyId,
    });
    return res.json(success(template));
  } catch (e) {
    return res.json(failed("Error occured, could not fetch email templates"));
  }
};
