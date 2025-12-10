/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
      const char = s[i].toLowerCase()
      if ((char >= '0' && char <= '9') || (char >= 'a' && char <= 'z')) {
        res += char
      }
    }

    return TestUtils.isPalindrome.call({ str: res })
  }
}
