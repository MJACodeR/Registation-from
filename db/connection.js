const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = () =>
mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log("connections successfully");
    }).catch((err) =>{
      console.log("connection failed!");
    })
  
module.exports = connectDB;