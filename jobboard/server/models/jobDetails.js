const mongoose = require("mongoose");

const jobDetails = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    salary : { 
        min: Number,
        max: Number,
    },
    location: {
        type: String,
        required: true,
    },
    employmentType: {
        type:  String,
        required: true,
    },
    experience: {
        type: Number,
    },
    requirements: {
        type: String,
    },
    skills: {
        type: [String],
        default: [],
    }
},
{ timestamps: true }
);

module.exports = mongoose.model("Jobdetails", jobDetails);