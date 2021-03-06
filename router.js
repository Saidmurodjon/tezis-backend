const express = require("express");
const router = express.Router();
const path = require("path");
// barcha so'rovlar githubda yozilgan !!!
const teacherRouter = require("./teachers/teacher.router");
const adminRouter = require("./admin/admin.router");
const auth = require("./jwt/auth");
// const jwtVerify=require('./jwt/jwtVerify')
const chiefRouter = require("./chief/chief.router");
const exampleRouter = require("./example/example.router");
const paperworkRouter = require("./paperwork/paperwork.router");
const deanRouter = require("./dean/dean.router");
router.use("/login", auth);
// router.use(jwtVerify)
router.use("/teachers", teacherRouter);
router.use("/addAdmin", adminRouter);
router.use("/chief", chiefRouter);
router.use("/paperwork", paperworkRouter);
router.use("/uploads", express.static((__dirname, "uploads")));
router.use("/example", exampleRouter);
router.use("/dean", deanRouter);

module.exports = router;
