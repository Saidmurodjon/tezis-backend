const DeanModel = require("./dean.model");
// const fs = require('fs');
// const path = require('path');
// const upload = require('../teachers/upload');
async function getDean(req, res) {
  try {
    const Chief = await DeanModel.find({});
    return res.status(200).send(Chief);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function addDean(req, res) {
  try {
    // let image =req.file.originalname

    const category = await DeanModel.create(req.body);

    return res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateDean(req, res) {
  try {
    let userId = req.params.id;

    let category = {
      name: req.body.name,
      lastName: req.body.lastName,
      tel: req.body.tel,
      email: req.body.email,
      faculty: req.body.faculty,
      login: req.body.login,
      password: req.body.password,
    };
    let result = await DeanModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteDean(req, res) {
  try {
    let userId = req.params.id;
    // let del= await ChiefModel.findOne({userId})

    // console.log(del.imagePath);

    // fs.unlink( `/home/kali/theBest/EducationMERN/backend/uploads/${del.imagePath}`, function (err) {
    //     if (err) {
    //         console.error(err);
    //     }
    //    console.log('File has been Deleted');
    // });

    let result = await DeanModel.findByIdAndDelete(userId);
    // console.log(del.imagePath);
    // fs.unlinkSync();

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getDean,
  addDean,
  updateDean,
  deleteDean,
};
