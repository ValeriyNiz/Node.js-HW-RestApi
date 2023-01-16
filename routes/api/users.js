const express = require("express");

const { validation, authorization } = require("../../middlewares");

const { controllerWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const { users: {signup, login, getActual, logout, updateSigning} } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(schemas.register), controllerWrapper(signup));

router.post("/login", validation(schemas.login), controllerWrapper(login));

router.get("/current", authorization, controllerWrapper(getActual));

router.get("/logout", authorization, controllerWrapper(logout));

router.patch(
  "/",
  authorization,
  validation(schemas.subscription),
  controllerWrapper(updateSigning)
);

module.exports = router;