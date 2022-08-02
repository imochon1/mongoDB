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

const findOriginByid = async (req, res) => {
  try {
    const { id } = req.params;
    const originFound = await Origen.findById(id);
    if (!originFound) {
      res.status(404).json({
        message: "Origin Not Found",
      });
    } else {
      res.status(200).json({ message: "Origin Found", originFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Origin", error });
  }
};

const updateOriginById = async (req, res) => {
  const { id } = req.params;
  try {
    const originToUpdate = await Origen.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Origin Updated Successfully",
      origin: originToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Origin", error });
  }
};

const deleteOriginById = async (req, res) => {
  const { id } = req.params;
  try {
    const originToDelete = await Origen.findByIdAndDelete(id);
    res.status(200).json({
      message: "Origin Deleted Successfully",
      origin: originToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Origin", error });
  }
};

const softDeleteOriginById = async (req, res) => {
  const { id } = req.params;
  try {
    const originToDelete = await Origen.findByIdAndUpdate(
      id,
      {
        is_Active: false,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Origin Soft Deleted Successfully",
      origin: originToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Soft Deleting Origin", error });
  }
};

module.exports = {
  findOrigins,
  addOrigin,
  findOriginByid,
  updateOriginById,
  deleteOriginById,
  softDeleteOriginById,
};
