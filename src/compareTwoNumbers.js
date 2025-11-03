/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  let r = "="
  if (firstNumber > secondNumber) r = ">"
  if (firstNumber < secondNumber) r = "<"
  return r
}
