const bcrypt = require("bcrypt");

const User = require("../models/User.js");

module.exports = {
  //sintaxis key : value
  //User.find()
  findAll: async (_req, res) => {
    try {
      const allUsers = await User.find({ isDeleted: false });
      res.status(200).json({ message: "All Users", user: allUserNs });
    } catch (error) {
      res.status(400).json({ message: "Error Recovering Users", error });
    }
  },

  create: async (req, res) => {
    const saltRounds = 10;
    const password = req.body.password;
    const verifyPassword = req.body.verifyPassword;
    console.log(req.body, "REQ:BODY.");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedVerifyPassword = await bcrypt.hash(verifyPassword, saltRounds);
    req.body.password = hashedPassword;
    req.body.verifyPassword = hashedVerifyPassword;
    console.log("Password Hashed", hashedPassword);
    console.log("Verify Password Hashed", hashedVerifyPassword);
    try {
      const newUser = await User.create(req.body);
      console.log("REQ", req);
      res.status(201).json({
        message: "User Created",
        user: newUser,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error Creating User",
        error,
      });
    }
  },

  findoneById: async (req, res) => {
    try {
      const { id } = req.params;
      const userFound = await User.findById(id);
      if (!userFound) {
        res.status(404).json({
          message: "User Not Found",
        });
      } else {
        res.status(200).json({ message: "User Found", userFound });
      }
    } catch (error) {
      res.status(500).json({ message: "Error Finding User", error });
    }
  },

  updateById: async (req, res) => {
    const { id } = req.params;
    try {
      const userToUpdate = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "User Updated Successfully",
        user: userToUpdate,
      });
    } catch (error) {
      res.status(500).json({ message: "Error Updating  User", error });
    }
  },

  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const userToDelete = await User.findByIdAndDelete(id);
      res.status(200).json({
        message: "User Deleted Successfully",
        user: userToDelete,
      });
    } catch (error) {
      res.status(500).json({ message: "Error Deleting User", error });
    }
  },

  softDeleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const userToSoftDelete = await User.findByIdAndUpdate(
        id,
        {
          is_active: false,
        },
        { new: true }
      );
      res.status(200).json({
        message: "User Soft-Deleted Successfully",
        user: userToSoftDelete,
      });
    } catch (error) {
      res.status(500).json({ message: "Error Soft-Deleting User", error });
    }
  },
};
