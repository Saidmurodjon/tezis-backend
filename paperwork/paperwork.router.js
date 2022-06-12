const express = require("express");
const router = express.Router();
const upload= require("../documents/uploadDocument");
const paperworkController = require("./paperwork.controller");

router.route("/").get(paperworkController.getPaperwork);
router.route("/").post(upload,paperworkController.addPaperwork);
router.route("/:id").put(upload,paperworkController.updatePaperwork)
router.route("/:id").delete(paperworkController.deletePaperwork)    

module.exports = router;
