const express = require("express");

const AirlineController = require("../controllers/AirlineController");

const router = express.Router();

router.get("/", AirlineController.findAirline);

router.post("/", AirlineController.addAirline);

router.get("/:id", AirlineController.findAirlineById);

router.patch("/:id", AirlineController.updateAirlineById);

router.delete("/:id", AirlineController.deleteAirlineById);

router.delete("/:id/softdelete", AirlineController.AirlineSoftDelete);

module.exports = router;
