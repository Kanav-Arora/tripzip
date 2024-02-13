const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    address: {
        type: Schema.Types.String,
        default: null,
    },
    pincode: {
        type: Schema.Types.Number,
        default: null,
    },
    city: {
        type: Schema.Types.String,
        default: null,
    },
    state: {
        type: Schema.Types.String,
        default: null,
    },
    country: {
        type: Schema.Types.String,
        default: null,
    },
    year_of_birth: {
        type: Schema.Types.Number,
        default: null,
    },
    age: {
        type: Number,
        max: 100,
        default: null,
    },
    gender: {
        type: Schema.Types.String,
        enum: ['Male', 'Female', 'Other'],
    },
    language_speak: {
        type: [Schema.Types.String],
        default: [],
    },
    birth_place: {
        type: Schema.Types.String,
        default: null,
    },
    hobbies: {
        type: [Schema.Types.String],
        default: [],
    },
    about: {
        type: Schema.Types.String,
        default: null,
    },
    stars: {
        type: Schema.Types.Number,
        default: 0,
    },
    tripsCreated: [
        {
            type: Schema.Types.ObjectId,
            ref: 'trips',
            default: [],
        },
    ],
    tripsInterested: [
        {
            type: Schema.Types.ObjectId,
            ref: 'trips',
            default: [],
        },
    ],
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
