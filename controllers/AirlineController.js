const Airline = require("../models/AirlineModel");

const findAirline = async (req, res) => {
  try {
    const allAirlines = await Airline.find({ is_active: true }).populate(
      "aviones"
    );

    res.status(200).json({ message: "All Airlines", airline: allAirlines });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Airlines", error });
  }
};

const addAirline = async (req, res, next) => {
  try {
    const newAirline = await Airline.create(req.body);
    res.status(201).json({
      message: "Added Airline",
      airline: newAirline,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Adding Airline",
      error,
    });
  }
};

module.exports = {
  findAirline,
  addAirline,
};
