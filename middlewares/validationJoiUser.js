const Joi = require("Joi");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const registerJoiSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionJoiSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
  registerJoiSchema,
  subscriptionJoiSchema,
  verifyEmailSchema,
}