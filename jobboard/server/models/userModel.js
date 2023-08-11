const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["employer", "candidate"],
        required: true,
    },
    id: { 
        type: String
    },
    firstname: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error("First name is invalid!");
            }
        },
    },
    lastname: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error("Last name is invalid!");
            }
        },
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid!");
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must have atleast 8 characters'],
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);