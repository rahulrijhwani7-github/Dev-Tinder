// export {}
// Using export {} at the first line we actually tell typescript that 
// treat this file as a seperate module so that the variable declared below are treate as local variables not global 
(() => {
const mongoose = require('mongoose');
const {Schema} = require('mongoose');  

// Creating a new schema for the User model
const userSchema = new Schema({
  userid: {
    type: String,
    required: true,
    unique: true
    },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender : {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create a mongoose model and exported it.
module.exports = mongoose.model('User', userSchema);

})();