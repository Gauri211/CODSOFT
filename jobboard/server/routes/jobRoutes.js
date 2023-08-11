const express = require('express');
const { createJob, getJobs } = require('../controllers/jobs');
const router = express.Router();

router.get('/', getJobs);
router.post('/create', createJob);

module.exports = router;