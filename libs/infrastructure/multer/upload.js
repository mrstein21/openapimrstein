const util = require("util");
const multer = require("multer");
const path= require('path');
const maxSize = 2 * 1024 * 1024;
const validator=require('../validator/airsoft_validator');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {  
    cb(null, __basedir + "/public/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  fileFilter:(req,file,cb)=>{
    const fileSize=parseInt(req.headers["content-length"])
    if(fileSize > 2 * 1024 * 1024 ){
      cb(new Error("File exceed limit !"));
    }
    if(req.path=="/add"){
      if(file==null){
        cb(new Error("You must attach an image"));
      }
      const {error}=validator.schemaAddAirsoft.validate(req.body);
      if(error!=null){
        cb(new Error(error.message.replace(/\\/g, '')));
      }
    }else if(req.path=="/test_upload"){
      if(file==null){
        cb(new Error("You must attach an image"));
      }
      const {error}=validator.schemaTestUpload.validate(req.body);
      if(error!=null){
        cb(new Error(error.message.replace(/\\/g, '')));
      }
    }else{
      const {error}=validator.schemaEditAirsoft.validate(req.body);
      if(error!=null){
        cb(new Error(error.message.replace(/\\/g, '')));
      }
    }     
    var ext = path.extname(file.originalname);
    if(ext.toLowerCase() !== '.png' && ext.toLowerCase() !== '.jpg' && ext.toLowerCase() !== '.gif' && ext.toLowerCase() !== '.jpeg') {
        return cb(new Error('Only images are allowed'))
    }
    cb(null, true)
  },
  limits: { fileSize: maxSize },
}).single("file");


let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

