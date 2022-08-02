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

const findAirlineById = async (req, res) => {
  try {
    const { id } = req.params;
    const airlineFound = await Airline.findById(id);
    if (!airlineFound) {
      res.status(404).json({
        message: "Airline Not Found",
      });
    } else {
      res.status(200).json({ message: "Airline Found", airlineFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Airline", error });
  }
};

const updateAirlineById = async (req, res) => {
  const { id } = req.params;
  try {
    const airlineToUpdate = await Airline.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Airline Updated Successfully",
      airline: airlineToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Airline", error });
  }
};

const deleteAirlineById = async (req, res) => {
  const { id } = req.params;
  try {
    const airlineToDelete = await Airline.findByIdAndDelete(id);
    res.status(200).json({
      message: "Airline Deleted Successfully",
      airline: airlineToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Airline", error });
  }
};

const AirlineSoftDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const airlineToSoftDelete = await Airline.findByIdAndUpdate(
      id,
      {
        is_active: false,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Airline Soft Deleted Successfully",
      airline: airlineToSoftDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Soft Deleting Airline", error });
  }
};

module.exports = {
  findAirline,
  addAirline,
  findAirlineById,
  updateAirlineById,
  deleteAirlineById,
  AirlineSoftDelete,
};
