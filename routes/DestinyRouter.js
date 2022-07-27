const express = require("express");

const DestinyController = require("../controllers/DestinyController");

const router = express.Router();

router.get("/", DestinyController.findDestiny);

router.post("/", DestinyController.addDestiny);

module.exports = router;
