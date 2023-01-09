const { ServiceError } = require("../helpers");

const validation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(new ServiceError(400, error.message));
    return;
  }
  next();
};

module.exports = validation;