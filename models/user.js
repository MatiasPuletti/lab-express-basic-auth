// User model goes here
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 2,
        maxlength: 40,
        lowercase: true,
        pattern: /^[a-z0-9]+$/,
        required: true
      },
      passwordHashAndSalt: {
        type: String,
        required: true
      },
      name: {
        type: String
      }
});

const User = mongoose.model('User', userSchema);

module.exports = User; 
