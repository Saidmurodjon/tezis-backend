const TeacherModel = require("./teacher.model");
// const fs = require('fs');

async function getTeacher(req, res) {
  try {
    const teacher = await TeacherModel.find({});
    return res.status(200).send(teacher);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function addTeacher(req, res) {
  try {
    const teacher = await TeacherModel.create(req.body);
    return res.status(201).send(teacher);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateTeacher(req, res) {
  try {
    let userId = req.params.id;
    // let del= await TeacherModel.findOne({userId})
    //     fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {
    //     if (err) {
    //         console.error(err);
    //     }
    //    console.log('File has been Deleted');
    // });
    // let image =req.file.originalname
    let category = {
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      kafedra: req.body.kafedra,
      login: req.body.login,
      password: req.body.password,
      // imagePath: image
    };
    let result = await TeacherModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteTeacher(req, res) {
  try {
    let userId = req.params.id;
    // let del= await TeacherModel.findOne({userId})

    // console.log(del.imagePath);

    // fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {
    //     if (err) {
    //         console.error(err);
    //     }
    //    console.log('File has been Deleted');
    // });

    let result = await TeacherModel.findByIdAndDelete(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = {
  getTeacher,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
