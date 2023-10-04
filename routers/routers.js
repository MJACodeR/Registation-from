const express = require('express');
const router = express.Router();
const { createUser,GetUser,deleteUser,UpdateUser,GetUserFind,GetAllUser} = require('../controller/controller');

//Create data
router.post("/api/employee/signup",createUser);
  
//GET Users
router.post("/api/employee/login",GetUser);

//GET ALL User information
router.get("/api/employee/all", GetAllUser)
  
//GET Single User
router.get("/api/employee/:id",GetUserFind);
  
//Delete Data
router.delete("/api/employee/delete/:id",deleteUser);
  
//Update the student By it id
router.put("/api/employee/update/:id",UpdateUser);


module.exports = router;