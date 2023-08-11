const JobDetails = require("../models/jobDetails");
const mongoose = require('mongoose');

exports.getJob = async (req, res) => {
    const { id } = req.params;

    try {
        const job = await JobDetails.findById(id);

        res.status(200).json(job);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getJobs = async (req, res) => {
    try {
        const jobs = await JobDetails.find();

        res.status(200).json(jobs); 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.createJob = async (req, res) => {
    const job = req.body;

    const newJob = new JobDetails(job);

    try {
        await newJob.save();

        res. status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
} 

exports.updateJob = async (req, res) => {
    const { id: _id } = req.params;
    const job = req.body;

    try {    
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that Id');
    
        const updatedJob = await JobDetails.findByIdAndUpdate(_id, { ...job, _id }, { new: true });
    
        res.status(201).json(updatedJob);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
} 

exports.deleteJob = async (req, res) => {
    const { id } = req.params;
    const job = req.body;

    try {    
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');
    
        await JobDetails.findByIdAndRemove(id);

        res.status(201).json({ message: "Post deleted!" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
} 



