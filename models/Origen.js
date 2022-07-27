const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrigenSchema = new Schema({
  name: String,
  destinos: [{ type: String, ref: "Destinos" }],
  //destinos: [{ type: Schema.Types.ObjectId, ref: "Destino" }],
  airlines: [{ type: Schema.Types.ObjectId, ref: "Airline" }],
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Origen", OrigenSchema);
