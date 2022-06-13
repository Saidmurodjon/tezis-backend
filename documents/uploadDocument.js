const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads/documents",
  filename: (req, file, cb) => {
    cb(null, req.body.date + file.originalname);
  },
});
let upload = multer({
  storage: storage,
}).fields([
  {
    name: "file1",
    maxCount: 1,
  },
  {
    name: "file2",
    maxCount: 1,
  },
  {
    name: "file3",
    maxCount: 1,
  },
]);
module.exports = upload;
