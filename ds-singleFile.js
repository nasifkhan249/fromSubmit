const express = require('express');
const app = express();
const helmet = require('helmet');
const multer = require('multer');
const indexRoute = require("./routes/index");


app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",indexRoute);

app.post("/",(req,res)=>{
    res.sendFile("index.html");
});

app.listen(8000);
console.log("server run success");