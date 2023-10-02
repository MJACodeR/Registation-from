const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/Employee",{useNewUrlParser:true,useUnifiedTopology:true,family:4}).then(
    ()=>{
        console.log("connections successfully");
    }).catch((err) =>{
      console.log("connection failed!");
    })