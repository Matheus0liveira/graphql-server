const mongoose = require('mongoose');


const Schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  latName: {
    type: String,
    required: true,
  },
  email: String,
  active: {
    type: Boolean,
    required: true,
  },
});


module.exports = mongoose.model('User', Schema);