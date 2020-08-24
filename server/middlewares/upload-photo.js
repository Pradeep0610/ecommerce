const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

//TODO get S3 service from amazon

//aws.config.update({
//    secretAccessKey: ,
//    accessKeyId:
//})

//const s3 = new aws.S3()

//const upload = multer({
//    storage: multerS3({
//        s3: s3,
//        bucket: "bucket-name",
//        acl: 'public-read',
//        metadata: (req, file, cb) => {
//            cb(null, { fieldName: file.fieldname })
//        },
//        key: (req, file, cb) => {
//            cb(null, Date.now().toString())
//        }
//    })
//})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

module.exports = multer({ storage: storage })