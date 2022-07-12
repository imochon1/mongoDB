//Se llama el modulo express
const express = require("express");
const UserController = require("../controllers/UserController");
const logger = require("../middlewares/logger");
const deletionlogger = require("../middlewares/deletionLogger");

const router = express.Router();

router.get("/", UserController.findAll);

router.post("/", logger, UserController.create);

router.get("/:id", UserController.findoneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", deletionlogger, UserController.deleteById);

router.delete("/:id/softdelete", UserController.softDeleteById);
module.exports = router;
