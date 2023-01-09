const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { controllerWrapper } = require("../../helpers");
const { validation, validationId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", validationId, controllerWrapper(ctrl.getById));

router.post("/", controllerWrapper(ctrl.add));

router.put(
  "/:id",
  validationId,
  validation(schemas.add),
  controllerWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  validationId,
  validation(schemas.updateFavorite),
  controllerWrapper(ctrl.updateFavorite)
);

router.delete("/:id", validationId, controllerWrapper(ctrl.deleteById));

module.exports = router
