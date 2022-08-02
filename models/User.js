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

//agregar atributo de attempts tipo entero default 0 if password != password attempt +1 cuando leegue a 4 attempts el usuario se desactiva (bloquea).si se acepta la peticion el jwt debe de expirar en 10 min.

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
