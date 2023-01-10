const { isValidObjectId } = require("mongoose");

const { ServiceError } = require("../helpers");

const validationId = (req, res, next) => {
  const { id } = req.params;
  const isValid = isValidObjectId(id);
  if (!isValid) {
    next(new ServiceError(404, "Invalid id"));
    return;
  }
  next();
};

module.exports = validationId;