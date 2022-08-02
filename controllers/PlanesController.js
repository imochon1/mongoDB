const Planes = require("../models/Aviones");

const findPlanes = async (req, res) => {
  try {
    const allPlanes = await Planes.find({ is_active: true }).populate(
      "personal_vuelo"
    );

    res.status(200).json({ message: "All Planes", planes: allPlanes });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "Error Recovering Planes", error });
  }
};

const postPlane = async (req, res) => {
  try {
    const addedPlane = Planes.create(req.body);
    res.status(201).json({ message: "Added Plane", plane: addedPlane });
  } catch (error) {
    res.status(400).json({ message: "Error adding Plane", error });
  }
};

const findPlaneById = async (req, res) => {
  try {
    const { id } = req.params;
    const planeFound = await Planes.findById(id);
    if (!planeFound) {
      res.status(404).json({
        message: "Plane Not Found",
      });
    } else {
      res.status(200).json({ message: "Plane Found", planeFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Plane", error });
  }
};

const updatePlaneById = async (req, res) => {
  const { id } = req.params;
  try {
    const planeToUpdate = await Planes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Plane Updated Successfully",
      plane: planeToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Plane", error });
  }
};

const deletePlaneById = async (req, res) => {
  const { id } = req.params;

  try {
    const planeToDelete = await Planes.findByIdAndUpdate(id, {
      is_active: false,
    });
    res.status(200).json({
      message: "Plane Deleted Successfully",
      plane: planeToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Plane", error });
  }
};

const softDeletePlane = async (req, res) => {
  const { id } = req.params;
  try {
    const planeToDelete = await Planes.findByIdAndUpdate(
      id,
      {
        is_active: false,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Plane Deleted Successfully",
      plane: planeToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Plane", error });
  }
};

module.exports = {
  findPlanes,
  postPlane,
  findPlaneById,
  updatePlaneById,
  deletePlaneById,
  softDeletePlane,
};
