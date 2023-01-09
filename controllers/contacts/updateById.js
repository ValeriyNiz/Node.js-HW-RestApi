const { Contact } = require("../../models/contacts");

const { ServiceError } = require("../../helpers");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw ServiceError(404);
  }
  res.json(result);
};

module.exports = updateById;