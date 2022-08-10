const Aviones = require("../models/Aviones");

const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const privateKey = "secret";

    //revisar si existe email,checar headers y payload
    // verificar que llegue la firma

    if (!req.headers.authorization) {
      res.status(400).json({
        message: "Token Invalido",
      });
    } else {
      const payload = jwt.verify(authorization, privateKey);
      console.log("payload", payload);
      //Aqui se valida el tiempo de exp y se vuelve a settear el token en el header con el nuevo tiempo de expiracion!

      res.setHeader("Authorization", "hola");
      next();
    }
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "Error Validating Token", error });
  }
};

module.exports = { validateToken };
