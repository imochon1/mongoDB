const express = require("express");

const AirlineController = require("../controllers/AirlineController");

const router = express.Router();

router.get("/", AirlineController.findAirline);

router.post("/", AirlineController.addAirline);

module.exports = router;
