const express = require("express");
const router = express.Router();
// const uploadMulter = require("../teachers/upload");

const chiefController = require("./chief.controller");
router.route("/").get(chiefController.getChief);
router.route("/").post(chiefController.addChief);
router.route("/:id").put(chiefController.updateChief);
router.route("/:id").delete(chiefController.deleteChief);

module.exports = router;
