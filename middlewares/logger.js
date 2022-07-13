const User = require("../models/User");

const logger = (req, res, next) => {
  console.log("BODY,", req.body);
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

module.exports = { logger, deletionLogger, validateEmail };
