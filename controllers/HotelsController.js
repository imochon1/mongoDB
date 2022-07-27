const Hotel = require("../models/Hotel");

const findHotels = async (req, res) => {
  try {
    const allHotels = await Hotel.find({ is_active: true }).populate(
      "destinos"
    );

    res.status(200).json({
      message: "All Available Hotels",
      hotels: allHotels,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Hotels", error });
  }
};

const addHotel = async (req, res) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json({
      message: "New Hotel Added",
      hotel: newHotel,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Adding Hotel", error });
  }
};

module.exports = {
  findHotels,
  addHotel,
};
