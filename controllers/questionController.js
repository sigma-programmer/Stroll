// controllers/questionController.js
const QuestionService = require('../services/questionService');

exports.getQuestionForRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const question = await QuestionService.getQuestionForRegion(region);
    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
