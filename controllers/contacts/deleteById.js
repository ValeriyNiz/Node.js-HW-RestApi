const { Contact } = require("../../models/contacts");

const { ServiceError } = require("../../helpers");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw new ServiceError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = deleteById;