const express = require("express");

const { validation, authorization, upload } = require("../../middlewares");

const { controllerWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const { users: {signup, login, getActual, logout, updateSigning, avatars, verificationToken} } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(schemas.register), controllerWrapper(signup));

router.get("/verify/:verificationToken", controllerWrapper(verificationToken));

router.post(
  "/verify",
  validation(schemas.verifyEmail),
  controllerWrapper(login)
);

router.post("/login", validation(schemas.login), controllerWrapper(login));

router.get("/current", authorization, controllerWrapper(getActual));

router.get("/logout", authorization, controllerWrapper(logout));

router.patch(
  "/",
  authorization,
  validation(schemas.subscription),
  controllerWrapper(updateSigning)
);

router.patch(
  "/avatars",
  authorization,
  upload.single("avatar"),
  controllerWrapper(avatars)
);

module.exports = router;