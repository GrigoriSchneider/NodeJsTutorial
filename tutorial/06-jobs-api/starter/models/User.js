const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    tape: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50
  },
  email: {
    tape: String,
    required: [true, 'Please provide email'],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
    unique: true
  },
  password: {
    tape: String,
    required: [true, 'Please provide password'],
    minlength:6,
    maxlength: 50
  },
})

module.exports = mongoose.model('User', UserSchema)