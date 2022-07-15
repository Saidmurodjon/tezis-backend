const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const TeacherModel = require("../teachers/teacher.model");
const ChiefModel = require("../chief/chief.model");
const config = require("./config");
router.route("/").post(async (req, res) => {
  try {
    const teacher = await TeacherModel.findOne({
      login: req.body.login,
      password: req.body.password,
    });
    const chief = await ChiefModel.findOne({
      login: req.body.login,
      password: req.body.password,
    });
    if (teacher) {
      const jwtToken = jwt.sign({ message: "tokencreated" }, config.secretKey, {
        expiresIn: config.expiresAt,
      });
      return res.status(200).json({
        jwt_token: jwtToken,
        user: teacher,
      });
    } else if (chief) {
      const jwtToken = jwt.sign({ message: "tokencreated" }, config.secretKey, {
        expiresIn: config.expiresAt,
      });
      return res.status(200).json({
        jwt_token: jwtToken,
        user: chief,
      });
    } else {
      return res.status(401).json({
        jwt_token: "hato login",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
});
module.exports = router;
