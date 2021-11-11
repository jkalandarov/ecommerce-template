const multer = require('multer')
const path = require('path')

//Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/data/uploads/',
    filename: (req, file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ 
    storage: storage,
    limits: {fileSize: 1572864}, // up to 1.5 MB
    fileFilter: (req, file, callback)=>{
        checkFileType(file, callback)
    } 
})

//Check File Type
const checkFileType = (file, cb) =>{
    //Allowed extensions
    const fileType = /jpeg|jpg|png|gif/

    //Check extension
    const extname = fileType.test(path.extname(file.originalname).toLowerCase())

    //Check mimetype
    const mimetype = fileType.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        return cb('Error: Not an image file!')
    }
}

module.exports = upload

//uploading again