const mongoose = require('mongoose');
const emailValidator = require('../util/validators').email;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: True,
        required: True
    },
    email: {
        type: String,
        trim: True,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address'], - two ways
        match: [emailValidator, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: True,
        required: True
    },
    passHistory: [{
        type: String
    }],
    age: {
        type: Number,
        min: 18
    },
    date: {
        type: Date,
        default: Date.now()
    }
})