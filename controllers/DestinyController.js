const Destiny = require("../models/Destinos");

const findDestiny = async (req, res) => {
  try {
    const allDestinations = await Destiny.find({ is_active: true })
      .populate("airlines")
      .populate("aviones")
      .populate("origen");

    res.status(200).json({
      message: "All Destinations",
      destinations: allDestinations,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Destinations", error });
  }
};

const addDestiny = async (req, res, next) => {
  try {
    const newDestiny = await Destiny.create(req.body);
    res.status(201).json({ message: "Added Destiny", destiny: newDestiny });
  } catch (error) {
    res.status(400).json({ message: "Error Adding Destiny", error });
  }
};

module.exports = {
  findDestiny,
  addDestiny,
};
