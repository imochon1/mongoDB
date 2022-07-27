const mongoose = require("mongoose");
const { Schema } = mongoose;

const DestinosSchema = new Schema({
  name: String,
  destination_code: String,
  origen: { type: Schema.Types.ObjectId, ref: "Origen" },
  is_active: { type: Boolean, default: true },
  airlines: [{ type: Schema.Types.ObjectId, ref: "Airline" }],
  aviones: [{ type: Schema.Types.ObjectId, ref: "Aviones" }],
});

module.exports = mongoose.model("Destinos", DestinosSchema);
