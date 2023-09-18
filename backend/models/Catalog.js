// Creating User Schema here
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CatalogSchema = new Schema({
  from_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  to_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'obsolete'],
    default: 'active'
  },
  created_at: {
    type: Date,
    default: Date.now
  },

});

const Catalog = mongoose.model('user', CatalogSchema);
module.exports = Catalog;
