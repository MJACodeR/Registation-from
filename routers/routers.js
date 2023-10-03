const express = require('express');
const router = express.Router();
const { createUser,GetUser,deleteUser,UpdateUser,GetUserFind,GetAllUser} = require('../controller/controller');

//Create data
router.post("/signup",createUser);
  
//GET Users
router.post("/login",GetUser);

//GET ALL User information
router.get("/all", GetAllUser)
  
//GET Single User
router.get("/emp/:_id",GetUserFind);
  
//Delete Data
router.delete("/delete/:_id",deleteUser);
  
//Update the student By it id
router.put("/update/:_id",UpdateUser);


module.exports = router;