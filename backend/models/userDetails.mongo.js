const mongoose = require('mongoose');

const { Schema } = mongoose;

const userDetailSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
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
    year_of_birth: {
        type: Schema.Types.Number,
    },
    age: {
        type: Number,
        max: 100,
    },
    gender: {
        type: Schema.Types.String,
        enum: ['male', 'female', 'other'],
    },
    language_speak: {
        type: [Schema.Types.String],
        default: [],
    },
    birth_place: {
        type: Schema.Types.String,
    },
    hobbies: {
        type: [Schema.Types.String],
        default: [],
    },
    about_yourself: {
        type: Schema.Types.String,
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
