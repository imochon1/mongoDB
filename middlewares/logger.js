const logger = (req, res, next) => {
  console.log("User Logged");
  next();
  return;
};

module.exports = logger;
