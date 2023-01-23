const validation = require('./validation');
const validationId = require('./validationId');
const authorization = require('./authorization');
const { addSchema, updateFavoriteSchema } = require('./validationJoi');
const { registerJoiSchema, subscriptionJoiSchema } = require('./validationJoiUser');
const upload = require("./upload");


module.exports = {
  validation,
  validationId,
  addSchema,
  updateFavoriteSchema,
  registerJoiSchema,
  subscriptionJoiSchema,
  authorization,
  upload,
};