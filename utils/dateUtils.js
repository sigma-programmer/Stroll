// utils/dateUtils.js
exports.getCurrentCycleNumber = (startDate, cycleDuration) => {
    const now = new Date();
    const diffInMs = now - new Date(startDate);
    return Math.floor(diffInMs / (cycleDuration * 24 * 60 * 60 * 1000)) + 1;
  };
  
  exports.getNextCycleStartTime = (cycleDuration) => {
    const now = new Date();
    const nextCycle = new Date(now.getTime() + cycleDuration * 24 * 60 * 60 * 1000);
    return nextCycle;
  };
  