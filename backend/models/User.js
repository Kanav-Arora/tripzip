// Creating User Schema here
const mongoose = require('mongoose');
const { Schema } = mongoose;

// todo - add validations and checks
function generateUniqueUserName(name) {
  // For simplicity, this example generates a username by concatenating the first three letters of the name and a random number.
  // todo can be more better
  const randomSuffix = Math.floor(Math.random() * 10000);
  return name.slice(0, 3).toLowerCase() + randomSuffix;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  user_name: {
    type: String,
    unique: true,
    default: function () {
      // Generating a unique username based on the user's name
      return generateUniqueUserName(this.name);
    }
  },
  sing_in_count: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  },
  created_at: {
    type: Date,
    default: Date.now
  },

});

const User = mongoose.model('user', UserSchema);
module.exports = User;
