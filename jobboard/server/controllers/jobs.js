const JobDetails = require("../models/jobDetails");

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