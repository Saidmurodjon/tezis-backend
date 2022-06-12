const mongoose = require("mongoose");
const chifSchema = mongoose.Schema({
  name: String,
  lastName: String,
  tel: String,
  faculty: String,
  login: String,
  password: String,
  date: Date,
  // imagePath: {
  //     type: String,
  //     trim: true,
  //     required: true
  // }
  role: {
    type: String,
    default: "chief",
  },
});
const ChiefModel = mongoose.model("ChiefModel", chifSchema);
module.exports = ChiefModel;
