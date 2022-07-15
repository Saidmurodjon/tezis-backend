const mongoose = require("mongoose");
const teacherSchema = mongoose.Schema({
  fullName: String,
  //   lastName: String,
  tel: String,
  email: String,
  kafedra: String,
  kafedraId: String,
  login: String,
  password: String,
  date: Date,
  // imagePath: {
  //     type: String,
  //     trim: true,

  // },
  role: {
    type: String,
    default: "teacher",
  },
  tasdiq: {
    type: Boolean,
    default: false,
  },
});
const TeacherModel = mongoose.model("TeacherModel", teacherSchema);
module.exports = TeacherModel;
