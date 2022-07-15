const mongoose = require("mongoose");
const chifSchema = mongoose.Schema({
  fullName: String,
  kafedraName: String,
  tel: String,
  faculty: String,
  facultyId: String,
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
  tasdiq: {
    type: Boolean,
    default: false,
  },
});
const ChiefModel = mongoose.model("ChiefModel", chifSchema);
module.exports = ChiefModel;
