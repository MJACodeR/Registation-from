const { empModel } = require("../modules/register");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const existingUser = await empModel.findOne({
      username: req.body.username,
    });
    if (existingUser) {
      res.status(403);
      return res.json("User Already Exists");
    } else {
      // console.log(req.body.password)
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      //not hash used before using the data
      const newUser = await empModel.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
      });
      if (newUser) {
        res.status(201);
        return res.send(("User Created", newUser));
      } else {
        res.status(403);
        return res.json("Error Creating User");
      }
    }
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
};

// Login endpoint
const GetUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username
    const user = await empModel.findOne({ username: username.trim() });
    console.log(user);
    // console.log(user)
    if (!user) {
      return res.status(401).json({ error: "Invalid username" });
    }
    // console.log('Hashed Password:', user.password);
    // console.log('Provided Password:', password);
    if (password === user.password) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await empModel.findOneAndDelete({ id });
    if (!deletedUser) {
      return res.status(404).send("User not found");
    } else {
      res.send("User deleted successfully");
      console.log("User deleted successfully");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};


//GET ALL USER
const GetAllUser = async (req, res) => {
    try {
      const Getuser = await empModel.find();
      res.status(202).send(Getuser);
    } catch (error) {
      res.status(400).send(error);
    }
  };

//GET USER BY ID
const GetUserFind = async (req, res) => {
    try {
      const id = req.params.id; 
      // Use id to find and delete the user
      const GetUserByID = await empModel.findById({id});
      console.log(GetUserByID)
      if (!GetUserByID) {
        return res.status(404).send("User not found");
      } else {
        res.send(GetUserByID);
        console.log("Data fetch successfully...");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };


//UPDATE BY ID
// console.log('outside update');
const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, phone } = req.body
  try {
    const updatedUser = await empModel.findByIdAndUpdate(id,{ username, email, phone },{ new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    else{
      return res.send(updatedUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser, GetUser, deleteUser, UpdateUser,GetUserFind,GetAllUser };
