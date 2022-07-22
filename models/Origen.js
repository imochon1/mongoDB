const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrigenSchema = new Schema({
  name: String,
  destinos: [{ type: String, ref: "Origen" }],
  //destinos: [{ type: Schema.Types.ObjectId, ref: "Destino" }],
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Origen", OrigenSchema);
