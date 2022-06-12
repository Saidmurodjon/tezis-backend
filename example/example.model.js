const mongoose = require("mongoose");
const examplechema = mongoose.Schema({
  name: String,
  description: String,
  faculty: String,
  chiefId: String,
  chiefFullName: String,
  date: String,
  filePath: {
    type: String,
    trim: true,
    required: true,
  },
});
const ExampleModel = mongoose.model("ExampleModel", examplechema);
module.exports = ExampleModel;
