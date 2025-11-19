/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxStart = 0;
  let maxLength = 1;
  let currentStart = 0;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStart = currentStart;
      }
      currentStart = i;
      currentLength = 1;
    }
  }
  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStart = currentStart;
  }

  return arr.slice(maxStart, maxStart + maxLength);
};
