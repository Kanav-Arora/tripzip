const mongoose = require('mongoose');

const { Schema } = mongoose;

const emailVerifySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    email: { type: String, required: true, unique: true },
    verificationCode: { type: String, required: true },
    expirationTime: { type: Date, required: true },
    created_at: {
        type: Schema.Types.Date,
        default: Date.now,
    },
});

const EmailVerify = mongoose.model('emailVerify', emailVerifySchema);
module.exports = EmailVerify;
