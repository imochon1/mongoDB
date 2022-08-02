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

const findDestinyById = async (req, res) => {
  try {
    const { id } = req.params;
    const destinyFound = await Destiny.findById(id);
    if (!destinyFound) {
      res.status(404).json({
        message: "Destiny Not Found",
      });
    } else {
      res.status(200).json({ message: "Destiny Found", destinyFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Destiny", error });
  }
};

const updateDestinyById = async (req, res) => {
  const { id } = req.params;
  try {
    const destinyToUpdate = await Destiny.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Destiny Updated Successfully",
      destiny: destinyToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Destiny", error });
  }
};

const deleteDestinyById = async (req, res) => {
  const { id } = req.params;
  try {
    const destinyToDelete = await Destiny.findByIdAndUpdate(id, {
      is_active: false,
    });
    res.status(200).json({
      message: "Destiny Deleted Successfully",
      destiny: destinyToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Destiny", error });
  }
};

const softeDeleteDestiny = async (req, res) => {
  const { id } = req.params;
  try {
    const destinyToDelete = await Destiny.findByIdAndUpdate(id, {
      is_active: false,
    });
    res.status(200).json({
      message: "Destiny Deleted Successfully",
      destiny: destinyToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Destiny", error });
  }
};

module.exports = {
  findDestiny,
  addDestiny,
  findDestinyById,
  updateDestinyById,
  deleteDestinyById,
  softeDeleteDestiny,
};
