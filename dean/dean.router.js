const express = require("express");
const router = express.Router();
// const uploadMulter = require("../teachers/upload");

const deanController = require("./dean.controller");
router.route("/").get(deanController.getDean);
router.route("/").post(deanController.addDean);
router.route("/:id").put(deanController.updateDean);
router.route("/:id").delete(deanController.deleteDean);

module.exports = router;
