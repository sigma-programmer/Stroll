// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/questions/:region', questionController.getQuestionForRegion);

module.exports = router;
