const express = require("express");

const HotelController = require("../controllers/HotelsController");

const router = express.Router();

router.get("/", HotelController.findHotels);

router.post("/", HotelController.addHotel);

module.exports = router;
