const mongoose = require("mongoose");
const paperworkchema = mongoose.Schema({
  byFullName: String,
  description: String,
  kafedraId: String,
  subject: String,
  lesson: String,
  speciality: [
    {
      name: String,
    },
  ],
  state: Boolean,
  documents: Object,

  date: Date,
});
const PaperworkModel = mongoose.model("PaperworkModel", paperworkchema);
module.exports = PaperworkModel;
