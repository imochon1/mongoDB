const mongoose = require("mongoose");
const { Schema } = mongoose;

const AvionesSchema = new Schema({
  name: String,
  modelo: String,
  color: String,
  capacidad_personal: { type: Number, min: 4, max: 10 },
  capacidad_pasajeros: { type: Number, min: 4, max: 300 },
  capacidad_kilos: { type: Number, min: 4, max: 7000 },
  is_active: { type: Boolean, default: true },
  airline: { type: Schema.Types.ObjectId, ref: "Airline" },
  origen: { type: Schema.Types.ObjectId, ref: "Origen" },
  destino: { type: Schema.Types.ObjectId, ref: "Destinos" },
  hotel: { type: Schema.Types.ObjectId, ref: "Hotel" },
  personal_vuelo: [{ type: Schema.Types.ObjectId, ref: "Personal" }],
});

module.exports = mongoose.model("Aviones", AvionesSchema);
