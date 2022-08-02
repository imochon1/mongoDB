const express = require("express");

const LoginControleler = require("../controllers/LoginController");

const router = express.Router();

router.post("/", LoginControleler.UserLogin);

module.exports = router;
