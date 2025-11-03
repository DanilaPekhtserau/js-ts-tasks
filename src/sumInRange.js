/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  s = Number(start)
  e = Number(end)
  if (Number(start) < Number(end)){
    s = Number(start)
    e = Number(end)
  }
  else{
    e = Number(start)
    s = Number(end)
  }
  let sum = 0
  for (let i = s; i <= e; i++) {
    sum += i
  }
  return sum
}
