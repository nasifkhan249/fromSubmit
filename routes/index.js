const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../public/images/uploads");

    },


    filename:(req,file,cb)=>{
        const uniqSuffix = Date.now()+"-"+Math.round(Math.random()*1E9);
        cb(null,`${uniqSuffix}${file.originalname}`);
    }
});

const upload = multer({storage}).single("photos");

router.post("/fromSubmit",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            throw err;
        }else{
            res.json({
                fields:req.body,
                img:req.file,
            });
        }
    });
});

module.exports = router;
