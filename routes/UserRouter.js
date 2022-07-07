//Se llama el modulo express
const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", UserController.findAll);

router.post("/", UserController.create);

router.get("/:id", UserController.findoneById);

router.patch("/:id", UserController.updateById);

router.delete("/:id", UserController.deleteById);

router.delete("/:id/softdelete", UserController.softDeleteById);
module.exports = router;
