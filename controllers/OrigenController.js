const Origen = require("../models/Origen");

const findOrigins = async (req, res) => {
  try {
    const allOrigins = await Origen.find({ is_Active: true })
      .populate("destinos")
      .populate("airlines");
    res.status(200).json({ message: "All origins", origins: allOrigins });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Origins", error });
  }
};

const addOrigin = async (req, res) => {
  try {
    const newOrigin = await Origen.create(req.body);
    res.status(201).json({
      message: "New Origin Added",
      origin: newOrigin,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Adding Origin", error });
  }
};

module.exports = {
  findOrigins,
  addOrigin,
};
