const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 4,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: String,
    validate: {
      validator: (value) => validator.isMobilePhone(value, 'any', { strictMode: false }),
      message: '{VALUE} is not a valid phone number.',
    },
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min_length: 8,
    max_length: 12,
  },
});

const empModel = new mongoose.model("Employee", employeeSchema);

module.exports = { empModel };
