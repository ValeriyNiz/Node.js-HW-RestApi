const { Contact } = require("../../models/contacts");

const { ServiceError } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id, "-createdAt -updatedAt");
  if (!result) {
    throw new ServiceError(404);
  }
  res.json(result);
};

module.exports = getById;