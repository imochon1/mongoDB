const mongoose = require("mongoose");
const { Schema } = mongoose;

const DestinosSchema = new Schema({
  name: String,
  origen: { type: Schema.Types.ObjectId, ref: "Origen" },
  is_active: { type: Boolean, default: true },
  aviones: [{ type: Schema.Types.ObjectId, ref: "Aviones" }],
  airline: { type: Schema.Types.ObjectId, ref: "Airline" },
});

module.exports = mongoose.model("Destinos", DestinosSchema);
