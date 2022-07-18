const mongoose = require("mongoose");
const { Schema } = mongoose;

const AirlineSchema = new Schema({
  name: String,
  destinations: String,
  origin: String,
  price: Number,
  departure_id: String,
  arrival_id: String,
  departure_date: String,
  arrival_date: String,
  departure_time: String,
  arrival_time: String,
  code: String,
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Airline", AirlineSchema);
