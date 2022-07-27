const Personal = require("../models/Personal");

const findPersonel = async (_req, res) => {
  try {
    const allPersonel = await Personal.find({ isDeleted: false });
    res.status(200).json({ message: "All Personel", personal: allPersonel });
  } catch (error) {
    res.status(400).json({ message: "Error Recovering Personel", error });
  }
};

const addEmployee = async (req, res, next) => {
  try {
    const newEmployee = await Personal.create(req.body);
    res.status(201).json({
      message: "Added Eployee",
      employeee: newEmployee,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Adding Employee",
      error,
    });
  }
};

module.exports = {
  findPersonel,
  addEmployee,
};
