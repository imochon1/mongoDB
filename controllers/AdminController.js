const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

const findAllAdmins = async (_req, res) => {
  try {
    const allAdmins = await Admin.find({ role: "ADMIN" });
    res.status(200).json({ message: "All Admins", admin: allAdmins });
  } catch (error) {
    res.status(400).json({ message: "Error Recovering Admins", error });
  }
};

const createAdmin = async (req, res) => {
  const saltRounds = 10;
  const password = req.body.password;
  const verifyPassword = req.body.verifyPassword;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const hashedVerifyPassword = await bcrypt.hash(verifyPassword, saltRounds);
  req.body.password = hashedPassword;
  req.body.verifyPassword = hashedVerifyPassword;

  try {
    const newAdmin = await Admin.create(req.body);
    console.log("REQ", req);
    res.status(201).json({
      message: "Admin Created",
      admin: newAdmin,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Creating Admin",
      error,
    });
  }
};

module.exports = { findAllAdmins, createAdmin };
