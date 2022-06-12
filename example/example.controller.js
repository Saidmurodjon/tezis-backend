const ExampleModel = require("./example.model");
const fs = require("fs");
const express = require("express");
async function getExample(req, res) {
  try {
    const example = await ExampleModel.find({});
    return res.status(200).send(example);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function addExample(req, res) {
  try {
    let file = req.file.originalname;
    const category = new ExampleModel({
      name: req.body.name,
      description: req.body.description,
      faculty: req.body.faculty,
      chiefId: req.body.chiefId,
      chiefFullName: req.body.chiefFullName,
      date: new Date(),
      filePath: file,
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
  } catch (err) {
    res.status(400).send(err);
  }
}
async function updateExample(req, res) {
  try {
    let userId = req.params.id;
    let del = await ExampleModel.findOne({ userId });

    fs.unlink((__dirname, `uploads/example/${del.filePath}`), function (err) {
      if (err) {
        console.error(err);
      }
      console.log("File has been Deleted");
    });
    let file = req.file.originalname;
    let category = {
      name: req.body.name,
      description: req.body.description,
      faculty: req.body.faculty,
      chiefId: req.body.chiefId,
      chiefFullName: req.body.chiefFullName,
      date: new Date(),
      filePath: file,
    };
    let result = await ExampleModel.findByIdAndUpdate(userId, category);

    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function deleteExample(req, res) {
  try {
    let userId = req.params.id;
    let del = await ExampleModel.findOne({ userId });
    fs.unlink((__dirname, `uploads/example/${del.filePath}`), function (err) {
      if (err) {
        console.error(err);
      }
      console.log("File has been Deleted");
    });

    let result = await ExampleModel.findByIdAndDelete(userId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
}
module.exports = {
  getExample,
  addExample,
  deleteExample,
  updateExample,
};
