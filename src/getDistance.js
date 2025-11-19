/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const distance = Math.sqrt(((firstPoint.X - secondPoint.X) * (firstPoint.X - secondPoint.X)) +
   ((firstPoint.Y - secondPoint.Y) * (firstPoint.Y - secondPoint.Y))).toFixed(2)
  return distance
};
