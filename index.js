//usamos dotenv para leer variables de entorno
require("dotenv").config();
//Lamamos al modulo express
const express = require("express");
//lamamos a mongoose
const mongoose = require("mongoose");

//importamos el UserRouter
const UserRouter = require("./routes/UserRouter");
//importamos el AdminRouter
const PersonalRoutes = require("./routes/PersonalRoutes");

const PlaneRouter = require("./routes/PlaneRouter");

const AirlineRouter = require("./routes/AirlineRouter");

const DestinyRouter = require("./routes/DestinyRouter");

const HotelsRouter = require("./routes/HotelRouter");

const OriginsRouter = require("./routes/OriginRouter");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a Mongo Atlas"))
  .catch(() => console.log("Error al conectar a Mongo Atlas"));

//Guardamos en constante app la ejecucuion de express() y despues indicamos parsear a json
const app = express();
app.use(express.json());
//Definimos el puerto en caso de no estar definido ocupa el puerto 3300
const PORT = process.env.PORT || 3300;

//get localhost:3300
app.get("/", (__, res) => {
  res.json({ message: "Backend Up And Running" });
});

//Crear Ruta Usuarios
app.use("/users", UserRouter);

//rutas / endpoints
app.use("/personel", PersonalRoutes);

app.use("/planes", PlaneRouter);

app.use("/airlines", AirlineRouter);

app.use("/destinations", DestinyRouter);

app.use("/hotels", HotelsRouter);

app.use("/origins", OriginsRouter);

//Escuchar el puerto 3300
app.listen(3300, () => {
  console.log(`App Running On port ${PORT}`);
});
