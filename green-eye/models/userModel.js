const mongoose = require("mongoose");

<<<<<<< HEAD
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "user name is required"],
    minlength: [5, "way too short name, please enter at least 5 chars"],
  },
  password: {
    type: String,
    required: [true, " password must be provided"],
=======
export const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "user name is required"],
    minlength: [5, , "way too sort name, please enter at least 5 chars"],
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
  },
  role: {
    type: String,
    enum: ["soldier", "commander"],
    required: [true, "please provide a role"],
  },
  area: {
    type: String,
    enum: ["center", "north", "south", "west", "east"],
<<<<<<< HEAD
    required: [true, "please provide an area"],
  },
  units: {
    type: [Number],
    required: [true, "please specify at least one unit"],
=======
    required: [true, "please provide a area"],
  },
  units: {
    type: [Number],
    required: [true, "please specify unit"],
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
  },
});

const UserModel = mongoose.model("user", userSchema);

<<<<<<< HEAD
module.exports = {
    UserModel,
    userSchema
};
=======

module.exports = {
    UserModel,
    userSchema
};


>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
