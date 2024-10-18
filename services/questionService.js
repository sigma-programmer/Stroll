// services/questionService.js
const Question = require('../models/Question');
const Cycle = require('../models/Cycle');
const { getCurrentCycleNumber, getNextCycleStartTime } = require('../utils/dateUtils');

exports.getQuestionForRegion = async (region) => {
  const currentCycle = await Cycle.findOne({ region });

  // If cycle not found, create a new one
  if (!currentCycle) {
    throw new Error('Region not configured for question cycles');
  }

  const now = new Date();
  if (now >= currentCycle.nextCycleStart) {
    // Time to rotate the question
    currentCycle.currentCycle += 1;
    currentCycle.nextCycleStart = getNextCycleStartTime(currentCycle.cycleDuration);
    await currentCycle.save();
  }

  const questions = await Question.findOne({ region });
  const questionIndex = (currentCycle.currentCycle - 1) % questions.questionSet.length;

  return questions.questionSet[questionIndex];
};
