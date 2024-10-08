const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "user name is required"],
    minlength: [5, , "way too sort name, please enter at least 5 chars"],
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
  },
  role: {
    type: String,
    enum: ["soldier", "commander"],
    required: [true, "please provide a role"],
  },
  area: {
    type: String,
    enum: ["center", "north", "south", "west", "east"],
    required: [true, "please provide a area"],
  },
  units: {
    type: [Number],
    required: [true, "please specify unit"],
  },
});

const UserModel = mongoose.model("user", userSchema);


module.exports = {
    UserModel,
    userSchema
};


