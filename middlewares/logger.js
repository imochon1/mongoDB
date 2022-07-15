const User = require("../models/User");

const logger = (req, res, next) => {
  req.language = "es";

  next();
};
//delete logger
const deletionLogger = (req, res, next) => {
  console.log("User Deleted");
  next();
};

const validateEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound) {
      console.log("Email existes already");
      res.status(400).json({
        message: "Email Already Exists",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Error Validating Email", error });
  }
};

const isUserActive = async (req, res, next) => {
  try {
    const { id } = req.params; //NO CONFUNDIR REQ.PARAMS CON REQ.BODY
    const userFound = await User.findById(id);
    if (userFound.is_active) {
      console.log("User is active");
      next();
    } else {
      console.log("User is not active");
      res.status(400).json({
        message: "User is not active",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Validating User", error });
    console.log("error", error);
  }
};
//hacer soft delete para probar el middleware

module.exports = { logger, deletionLogger, validateEmail, isUserActive };
