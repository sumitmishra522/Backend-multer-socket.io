const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary')

const cloudinary = require('../config/cloudinary')


// Image upload code

const imageStorage = new CloudinaryStorage({
    cloudinary, // check all the credentials
    params : {
        folder: "images", // this folder will be created on cloudinary storage
    resource_type: "image", // image file only
    allowed_formats: ["jpg", "jpeg", "png"]

    },
});

const uploadImage = multer({
    storage: imageStorage,
    limits: {fileSize: 5 * 1024 * 1024} // 5MB
});

// upload files // pdf doc 

const fileStorage = new CloudinaryStorage({
    cloudinary, // check all the credentials
    params:{
        folder: "files",
        resource_type: "raw", 
        allowed_formats: ["pdf", "doc", "docx", "zip", "txt"]

    },
});

const uploadFile = multer({
    storage: fileStorage,
    limits: {fileSize: 10 * 1024 * 1024} // 10MB 
})

module.exports = { uploadImage, uploadFile }