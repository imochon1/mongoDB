const express = require("express");
const { Router } = require("express");
const PersonalController = require("../controllers/PersonalController");

const router = express.Router();

router.get("/", PersonalController.findPersonel);

router.post("/", PersonalController.addEmployee);

module.exports = router;
