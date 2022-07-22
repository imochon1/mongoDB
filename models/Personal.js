const mongoose = require("mongoose");
const { Schema } = mongoose;

const PersonalSchema = new Schema({
  name: String,
  last_name: String,
  age: { type: Number, min: 18, max: 100 },
  is_active: { type: Boolean, default: true },
  airline: { type: Schema.Types.ObjectId, ref: "Airline" },
  aviones: [{ type: Schema.Types.ObjectId, ref: "Aviones" }],
  fecha_alta: { type: Date, default: Date.now },
  antiguedad: { type: Number, min: 0, max: 100 },
  idiomas: [{ type: String, enum: ["es", "en", "fr", "it", "de", "pt"] }],
});

module.exports = mongoose.model("Personal", PersonalSchema);
