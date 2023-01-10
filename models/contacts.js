const { Schema, model } = require("mongoose");
const {addSchema, updateFavoriteSchema} = require('../middlewares')
const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);



const schemas = {
  add: addSchema,
  updateFavorite: updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };