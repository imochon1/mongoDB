const express = require("express");
const { Router } = require("express");
const PersonalController = require("../controllers/PersonalController");

const router = express.Router();

router.get("/", PersonalController.findPersonel);

router.post("/", PersonalController.addEmployee);

router.get("/:id", PersonalController.findEmployeeById);

router.put("/:id", PersonalController.updateEmployeeById);

router.delete("/:id", PersonalController.deleteEmployeeById);

router.delete("/soft-delete/:id", PersonalController.softDeleteEmployee);

module.exports = router;
