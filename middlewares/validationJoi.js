const Joi = require("Joi");

const addSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s'’ʼ-]{3,30}$/)
    .required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9()+\s-]{10,19}$/)
    .required(),
  favorite: Joi.bool(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema
}