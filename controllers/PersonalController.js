const { populate } = require("../models/Destinos");
const Personal = require("../models/Personal");

const findPersonel = async (_req, res) => {
  try {
    const allPersonel = await Personal.find({ is_active: true })
      .populate("aviones")
      .populate("airline");
    res.status(200).json({ message: "All Personel", personal: allPersonel });
  } catch (error) {
    console.log("error", error);
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

const findEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeFound = await Personal.findById(id);
    if (!employeeFound) {
      res.status(404).json({
        message: "Employee Not Found",
      });
    } else {
      res.status(200).json({ message: "Employee Found", employeeFound });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding Employee", error });
  }
};

const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employeeToUpdate = await Personal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Employee Updated Successfully",
      employee: employeeToUpdate,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating Employee", error });
  }
};

const deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employeeToDelete = await Personal.findByIdAndUpdate(id, {
      is_active: false,
    });
    res.status(200).json({
      message: "Employee Deleted Successfully",
      employee: employeeToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Employee", error });
  }
};

const softDeleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employeeToDelete = await Personal.findByIdAndUpdate(
      id,
      {
        is_active: false,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Employee Deleted Successfully",
      employee: employeeToDelete,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Employee", error });
  }
};

module.exports = {
  findPersonel,
  addEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  softDeleteEmployee,
};
