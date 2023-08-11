const express = require('express');
const { signin } = require('../controllers/authController');
const { signup } = require('../controllers/authController');
const router = express.Router();

//auth routes
router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;