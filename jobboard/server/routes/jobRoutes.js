const express = require('express');
const { createJob, getJobs, getJob, updateJob, deleteJob } = require('../controllers/jobs');
const { authMiddleware, isEmployer } = require('../middleware/auth');
const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJob);
router.post('/create', authMiddleware, isEmployer, createJob);
router.patch('/:id', authMiddleware, isEmployer, updateJob);
router.delete('/:id', authMiddleware, isEmployer, deleteJob);

module.exports = router;