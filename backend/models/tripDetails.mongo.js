const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripDetailsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    title: {
        type: Schema.Types.String,
        required: true,
    },
    startDate: {
        type: Schema.Types.Date,
        required: true,
    },
    endDate: {
        type: Schema.Types.Date,
        required: true,
    },
    description: {
        type: Schema.Types.String,
    },
    city: {
        type: Schema.Types.String,
        required: true,
    },
    state: {
        type: Schema.Types.String,
        required: true,
    },
    pincode: {
        type: Schema.Types.String,
        required: true,
    },
    itinerary: [
        {
            description: {
                type: Schema.Types.String,
                required: true,
            },
            amount: {
                type: Schema.Types.Number,
                required: false,
            },
        },
    ],
    cost: {
        stay: {
            type: Schema.Types.Number,
            required: false,
        },
        travel: {
            type: Schema.Types.Number,
            required: false,
        },
        food: {
            type: Schema.Types.Number,
            required: false,
        },
        miscellaneous: {
            type: Schema.Types.Number,
            required: false,
        },
    },
    created_at: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    updated_at: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});

const TripsDetails = mongoose.model('tripdetails', tripDetailsSchema);
module.exports = TripsDetails;
