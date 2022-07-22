const Planes = require("../models/Aviones");

const findPlanes = async (req, res) => {
  try {
    const allPlanes = await Planes.find({ is_active: true });
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

module.exports = {
  findPlanes,
  postPlane,
};
