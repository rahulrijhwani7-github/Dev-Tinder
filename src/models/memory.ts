// Using export {} at the first line we actually tell typescript that 
// treat this file as a seperate module so that the variable declared below are treated as local variables not global 
// Here since we are using the cjs module system, so I am enclosing in IIFE
(() => {
const mongoose = require('mongoose');
const {Schema} = require('mongoose');  

// Creating a new schema for the Memory model
const memorySchema = new Schema({
  userid: {
    type: String,
    required: true
    },
  memoryid: {
    type: String,
    required: true,
    unique: true
  },
  memoryinfo: {
    type: String,
    required: true
  },
  recordedtime: {
    type: Date,
    required: true,
    unique: true
  },
  updatedTime: {
    type: Date,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  memoryType: {
    type: String,
    enum: ['private', 'public']
  },
  memoryContext: {
    type: String,
    enum: ['travel', 'work', 'reminder', 'regular']
  },
  recordedMedium: {
    type: String,
    enum: ['text', 'image', 'video']
  }
});
// Create a mongoose model and exported it.
module.exports = mongoose.model('Memory', memorySchema);

})();
