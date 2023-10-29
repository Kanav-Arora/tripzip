// Creating User Detail Schema
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailSchema = new Schema({
    address: {
        type: Schema.Types.String,
    },
    pincode: {
        type: Schema.Types.Number,
    },
    city: {
        type: Schema.Types.String,
    },
    state: {
        type: Schema.Types.String,
    },
    country: {
        type: Schema.Types.String,
    },
    age: {
        type: Number,
        max: 100,
    },
    gender: {
        type: Schema.Types.String,
        enum: ['male', 'female', 'other'],
    },
    tripsCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'trips',
        default: [],
    }],
    tripsInterested: [{
        type: Schema.Types.ObjectId,
        ref: 'trips',
        default: [],
    }],
    status: {
        type: Schema.Types.String,
        enum: ['active', 'inactive', 'deleted'],
        default: 'active',
    },
    updatedAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});

const UserDetails = mongoose.model('userdetails', userDetailSchema);
module.exports = UserDetails;
