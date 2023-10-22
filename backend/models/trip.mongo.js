const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    tripDetails: {
        type: Schema.Types.ObjectId,
        ref: 'tripDetails',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: [true, 'No created by UID found'],
    },
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
    created_at: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    updated_at: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});

const Trips = mongoose.model('trips', tripSchema);
module.exports = Trips;
