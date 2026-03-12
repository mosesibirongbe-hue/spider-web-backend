const { required } = require('joi')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Your full name is required'],
        trim: true,
        minLength: [5, "Full name must have 5 characters!"],
    },
    userName: {
        type: String, 
        required: [true, 'Please enter a User name of your choice'],
        trim: true,
        unique: [true, "Username must be unique!"],
        minLength: [3, "Username must be at least 3 characters"],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, "Email must be unique!"],
        minLength: [5, "Email must have 5 characters!"],
        lowercase: true
    },
    password: {
        type: String,
        require: [true, "Password must be provided!"],
        trim: true,
        select: false
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        select: false,
    },

    /**
     * verificationCodeAttempts: Number
verificationCodeAttemptsWindow: Date
     */
    verificationCodeAttemps: {
        type: Number,
        select: false
    },
    verificationCodeAttemptsWindow: {
        type: Date,
        select: false
    },
    verificationCodeValidation: {
        type: Number,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false,
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)