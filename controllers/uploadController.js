exports.uploadImage = (req, res) => {
    try{
        if(!req.file) {
            return res.status(400).json({message: "No Image Uploaded"})
        }

        res.status(200).json({
            message: "Image Uploaded Successfully",
            url: req.file.path,
            publicId: req.file.filename 
        });

    } 
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

exports.uploadFile = (req, res) => {
    try{
        if(!req.file) {
            return res.status(400).json({message: "No file uploaded"})
        }

        res.status(200).json({
            message: "file uploaded successfully",
            url: req.file.path,
            publicId: req.file.filename,
            fileType: req.file.mimetype,
        })

    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}