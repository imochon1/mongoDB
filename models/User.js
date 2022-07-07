const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  lastName: { type: String, required: false },
  email: { type: String, unique: true },
  age: {
    type: Number,
    min: [18, "No puedes ser menor de 18"],
    max: [100, "No puedes ser mayor de 100"],
  },
  role: { type: String, default: "USER", enum: ["USER", "ADMIN", "SELLER"] },
  password: { type: String, required: true },
  verifyPassword: { type: String, required: true },
  is_active: { type: Boolean, default: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
