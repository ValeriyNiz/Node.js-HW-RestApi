const express = require('express');
const router = express.Router();
const {getAll, getById, add, updateById, updateFavorite, deleteById} = require("../../controllers");
const { controllerWrapper } = require("../../helpers");
const { authorization, validation, validationId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

router.get("/", authorization, controllerWrapper(getAll));

router.get("/:id", validationId, controllerWrapper(getById));

router.post("/", authorization, controllerWrapper(add));

router.put(
  "/:id",
  validationId,
  validation(schemas.add),
  controllerWrapper(updateById)
);

router.patch(
  "/:id/favorite",
  validationId,
  validation(schemas.updateFavorite),
  controllerWrapper(updateFavorite)
);

router.delete("/:id", validationId, controllerWrapper(deleteById));

module.exports = router
