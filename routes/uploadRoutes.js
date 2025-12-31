const express = require("express");
const router = express.Router();

const {uploadImage, uploadFile} = require("../middleware/upload");

const {
    uploadImage: uploadImageController, uploadFile: 
    uploadFileController } =  require("../controllers/uploadController")


/* Image upload route */

router.post("/upload-image", uploadImage.single("image"), uploadImageController)

/* file upload Route */
router.post("/upload-file", uploadFile.single("file"), uploadFileController)


module.exports = router