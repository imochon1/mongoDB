const deletionLogger = (req, res, next) => {
  console.log("User Deleted");
  next();
  return;
};

module.exports = deletionLogger;
