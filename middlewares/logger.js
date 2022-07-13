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

const validateEmail = (req, res, next) => {
  const { email } = req.body;
};
module.exports = { logger, deletionLogger, validateEmail };
