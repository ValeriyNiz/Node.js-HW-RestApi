const express = require('express');
const { createError } = require("../../helpers");
const {listContacts, getById, addContact, updateContact, removeContact} = require("../../models");
const router = express.Router();
const validation = require("./validation");
const {validate} = require('./validationMiddleware')

router.get("/", async (res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getById(id);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", validate(validation.contactSchema), async (req, res, next) => {
  try {
    const { error } = req.body;
    if (error) {
      throw createError(400, error.message);
    }
    const { name, email, phone } = req.body;
    const result = await addContact(name, email, phone);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validate(validation.contactSchema),async (req, res, next) => {
  try {
    const { error } = req.body;
    if (error) {
      throw createError(400, error.message);
    }
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const result = await updateContact(id, name, email, phone);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await removeContact(id);
    if (!result) {
      throw createError(404);
    }
    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router
