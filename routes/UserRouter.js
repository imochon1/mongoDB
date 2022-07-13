//Se llama el modulo express
const express = require("express");
const UserController = require("../controllers/UserController");
const {
  logger,
  deletionLogger,
  validateEmail,
} = require("../middlewares/logger");

const router = express.Router();

router.get("/", UserController.findAll);

router.post("/", logger, validateEmail, UserController.create);

router.get("/:id", UserController.findoneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", deletionLogger, UserController.deleteById);

router.delete("/:id/softdelete", UserController.softDeleteById);
module.exports = router;
