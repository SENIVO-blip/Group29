const express = require('express');
const { protect } = require('../middleware/auth');
const { completeOnboarding } = require('../controllers/onboarding');

const router = express.Router();

router.post('/', protect, completeOnboarding);

module.exports = router;