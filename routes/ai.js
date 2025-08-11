const express = require('express');
const { protect } = require('../middleware/auth');
const { analyzeSymptoms } = require('../controllers/ai');

const router = express.Router();

router.post('/symptom-check', protect, analyzeSymptoms);

module.exports = router;