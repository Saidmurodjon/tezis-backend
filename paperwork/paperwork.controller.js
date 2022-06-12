
const PaperworkModel = require("./paperwork.model");
const fs = require("fs");
async function getPaperwork(req, res) {
  try {
    const example = await PaperworkModel.find({});
    return res.status(200).send(example);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function addPaperwork(req, res) {
  try {
    let file = {
      file1: new Date().toDateString() + req.files["file1"][0].originalname,
      file2: new Date().toDateString() + req.files["file2"][0].originalname,
      file3: new Date().toDateString() + req.files["file3"][0].originalname,
    };

    const category = new PaperworkModel({
      byFullName: req.body.byFullName,
      description: req.body.description,
      kafedraId: req.body.kafedraId,
      subject: req.body.subject,
      lesson: req.body.lesson,
      speciality: req.body.speciality,
      date: new Date(),
      documents: file,
    });

    category.save((err, category) => {
      if (err) {
        return res.status(400).json({
          errors: err.meesage,
        });
      }
      return res.json({
        message: "Created Chief's example successfully",
        category,
      });
    });
    console.log(file);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}

async function updatePaperwork(req, res) {
  try {
    let userId = req.params.id;
    let del = await PaperworkModel.findOne({ userId });
    let file = {
      file1: new Date().toDateString() + req.files["file1"][0].originalname,
      file2: new Date().toDateString() + req.files["file2"][0].originalname,
      file3: new Date().toDateString() + req.files["file3"][0].originalname,
    };
    fs.unlink(
      (__dirname, `uploads/documents/${del.documents.file1}`),
      function (err) {
        if (err) {
          console.error(err);
        }
        console.log("File has been Deleted");
      }
    );

    const category = new PaperworkModel({
      byFullName: req.body.byFullName,
      description: req.body.description,
      kafedraId: req.body.kafedraId,
      subject: req.body.subject,
      lesson: req.body.lesson,
      speciality: req.body.speciality,
      date: new Date(),
      documents: file,
    });
    let result = await PaperworkModel.findByIdAndUpdate(userId, category);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}
async function deletePaperwork(req, res) {
  try {
    let userId = req.params.id;
    let del = await PaperworkModel.findOne({ userId });
    fs.unlink(
      (__dirname, `uploads/documents/${del.documents.file1}`),
      function (err) {
        if (err) {
          console.error(err);
        }
        console.log("File has been Deleted");
      }
    );
    let result = await PaperworkModel.findByIdAndDelete(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}
module.exports = {
  getPaperwork,
  addPaperwork,
  deletePaperwork,
  updatePaperwork,
};
