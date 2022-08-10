const User = require("../models/User");
const bcrypt = require("bcrypt");
/*
Pasar a controlador de usuarios,aerolineas etc etc
*/

//si el email existe regresa exitoso el objetoc user,desencryptar el password y validar que coincida lo que se envia en postman con lo que esta en la base de datos,si hay match es exitoso se regresa el token, en caso contrario enviar mensaje de error de "Usuario o contraseña incorrectos".
const jwt = require("jsonwebtoken");

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound) {
      res.status(404).json({
        message: "User or Password Are not right",
      });
    } else {
      const match = await bcrypt.compare(password, userFound.password);

      if (match) {
        console.log("PaSSword matches", userFound);
        const privateKey = "secret";
        const payload = {
          id: userFound._id,
          email: userFound.email,
          role: userFound.role,
          exp: "600", //10minutos
        };
        const token = jwt.sign({ data: payload }, privateKey, {
          expiresIn: "1h",
        });
        console.log("TOKEN", token);
        res.status(200).json({ message: "Login Succesful", token });
        console.log("Acces Token Granted", token);
      } else {
        console.log("Usuario o Clave incorrectos");
        res.status(404).json({ message: "Usuario o Clave Incorrectos" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error Finding User", error });
  }
};

module.exports = {
  UserLogin,
};

//crear unas cuantas rutas privadas con validacion de token y dos minutos de expiracion y cada que el ususario haga una peticion se regenera el tiempo de expiracion!validar tipo de rol y se renvia el toke que se regenra en el header revisar validacion y expiracion!

/*
siento que falta algo en login?
valido token/hago rutas privadas a traves de middleware?
if (payload.role === "admin") {
  const payload = {
    id: userFound._id,
    email: userFound.email,
    role: userFound.role,
    exp: "600", //10minutos  asi lo regnero? o si payload.exp es menor al inicial volver a empezar la cuentA?
}


*/
