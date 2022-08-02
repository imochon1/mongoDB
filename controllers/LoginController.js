const Login = require("../models/Login");
/*
Pasar a controlador de usuarios,aerolineas etc etc
*/
const jwt = require("jsonwebtoken");

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await Login.findOne({ email, password });
    if (!userFound) {
      res.status(404).json({
        message: "User Not Found",
      });
    } else {
      const privateKey = "secret";
      const payload = {
        id: userFound._id,
        email: userFound.email,
        password: userFound.password,
      };
      const token = jwt.sign(payload, privateKey, { expiresIn: "1h" });
      console.log("Acces Token Granted", token);
      res.status(200).json({ message: "User Found", userFound, token });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding User", error });
  }
};

module.exports = {
  UserLogin,
};
