/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const uniqueNumbers = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return uniqueNumbers.length
};
