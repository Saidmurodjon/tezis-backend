const mongoose = require("mongoose");
const deanSchema = mongoose.Schema({
  fullName: String,
  faculty: String,
  tel: String,
  email: String,
  login: String,
  password: String,
  date: Date,
  // imagePath: {
  //     type: String,
  //     trim: true,
  //     required: true
  // }
  tasdiq: { type: Boolean, default: false },
  role: {
    type: String,
    default: "dean",
  },
});
const DeanModel = mongoose.model("DeanModel", deanSchema);
module.exports = DeanModel;
