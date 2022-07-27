const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: String,
  stars: { type: Number, min: 1, max: 5 },
  price: { type: Number, min: 99, max: 6000 },
  destinos: [{ type: Schema.Types.ObjectId, ref: "Destinos" }],
  is_active: { type: Boolean, default: true },
  habitaciones: [{ type: Number, min: 1, max: 3 }],
});

module.exports = mongoose.model("Hotel", HotelSchema);
