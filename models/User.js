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
  role: {
    type: String,
    default: "CLIENT",
    enum: ["CLIENT", "ADMIN", "SELLER"],
  },
  password: { type: String, required: true },
  verifyPassword: { type: String, required: true },
  is_active: { type: Boolean, default: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/**Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec function((err, story) => {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  }); */
