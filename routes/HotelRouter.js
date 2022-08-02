const express = require("express");

const HotelController = require("../controllers/HotelsController");

const router = express.Router();

router.get("/", HotelController.findHotels);

router.post("/", HotelController.addHotel);

router.get("/:id", HotelController.findHotelById);

router.patch("/:id", HotelController.UpdateHotelById);

router.delete("/:id", HotelController.DeleteHotelById);

router.delete("/:id/softdelete", HotelController.HotelSoftDelete);

module.exports = router;
