// Creating User Schema here
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Schema.Types.String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  status: {
    type: Schema.Types.String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  },
  created_at: {
    type: Schema.Types.Date,
    default: Date.now
  },
  updated_at: {
    type: Schema.Types.Date,
    default: Date.now
  },
  last_signin_at: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
