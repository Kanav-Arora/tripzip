// Creating User Schema here
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  userDetails: {
    type: Schema.Types.ObjectId,
    ref: 'userdetails',
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    minlength: 8,
    default: null,
  },
  isGoogleAuth: {
    type: Schema.Types.Boolean,
    default: false,
  },
  googleID: {
    type: Schema.Types.String,
    default: null,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active',
  },
  created_at: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  updated_at: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  last_signin_at: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', userSchema);
module.exports = User;
