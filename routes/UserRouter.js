//Se llama el modulo express
const express = require("express");
const UserController = require("../controllers/UserController");
const {
  logger,
  deletionLogger,
  validateEmail,
  isUserActive,
} = require("../middlewares/logger");
const { validateToken } = require("../middlewares/userMiddleware");

const router = express.Router();

router.get("/", validateToken, UserController.findAll);

router.post("/", logger, validateEmail, UserController.create);

router.get("/:id", UserController.findoneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", deletionLogger, UserController.deleteById);
//delete or update??
router.delete("/:id/softdelete", isUserActive, UserController.softDeleteById);
module.exports = router;
