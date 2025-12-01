/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function(addressData) {
    if (!addressData) {
      return ''
    }
    
    const fields = ['street', 'house', 'apartment', 'city', 'postal-code', 'country']
    const parts = []
    
    for (let i = 0; i < fields.length; i++) {
      let value = addressData[fields[i]]
      
      if (!value && fields[i] === 'postal-code') {
        value = addressData['postalCode']
      }
      
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