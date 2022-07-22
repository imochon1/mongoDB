const mongoose = require("mongoose");
const { Schema } = mongoose;

const AirlineSchema = new Schema({
  //un id se lo da mongoose auto
  name: String,
  precios: String,
  aviones: { type: Schema.Types.ObjectId, ref: "Aviones" },
  origen: { type: Schema.Types.ObjectId, ref: "Origen" },
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Airline", AirlineSchema);
