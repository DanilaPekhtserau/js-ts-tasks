/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function(addressData) {
    if (!addressData || !order) {
      return ''
    }
    
    const parts = []
    
    for (let i = 0; i < order.length; i++) {
      const value = addressData[order[i]]
      if (value !== undefined && value !== null && value !== '') {
        parts.push(value)
      }
    }
    
    let result = ''
    for (let i = 0; i < parts.length; i++) {
      result += parts[i]
      if (i !== parts.length - 1) {
        result += ', '
      }
    }
    
    return result
  }
}