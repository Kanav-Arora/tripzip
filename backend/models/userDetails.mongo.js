// Creating User Detail Schema
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailSchema = new Schema({
    uid: {
        type: Schema.Types.ObjectId,
        required: [true, 'No UID found'],
        unique: true,
    },
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
        ref: 'Trips',
        default: [],
    }],
    tripsInterested: [{
        type: Schema.Types.ObjectId,
        ref: 'Trips',
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

const UserDetails = mongoose.model('UserDetails', userDetailSchema);
module.exports = UserDetails;
