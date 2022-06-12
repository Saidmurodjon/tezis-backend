const express = require("express");
const router = express.Router();
const uploadFile = require("../uploadFile/file");
const exampleController = require("./example.controller");

router.route("/").get(exampleController.getExample);
router.route("/").post(uploadFile,exampleController.addExample);
router.route("/:id").put(uploadFile,exampleController.updateExample)
router.route("/:id").delete(exampleController.deleteExample)

module.exports = router;
