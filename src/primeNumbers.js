/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function(start, end) {
    if (start > end || start < 2) {
      return []
    }
    
    if (end > highestNumber) {
      end = highestNumber
    }
    
    const result = []
    
    for (let num = start; num <= end; num++) {
      let isPrime = true
      
      if (num < 2) {
        isPrime = false
      } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false
            break
          }
        }
      }
      
      if (isPrime) {
        result.push(num)
      }
    }
    
    return result
  }
}
