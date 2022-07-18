const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: String,
  lastName: { type: String, required: false },
  email: { type: String, unique: true },
  age: {
    type: Number,
    min: [18, "No puedes ser menor de 18"],
    max: [100, "No puedes ser mayor de 100"],
  },
  role: { type: String, default: "ADMIN" },
  password: { type: String, required: true },
  verifyPassword: { type: String, required: true },
  is_active: { type: Boolean, default: true },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
