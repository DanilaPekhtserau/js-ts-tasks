/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {

    if (!promisesArray || promisesArray.length === 0) {
        return new Promise(() => {});
    }

    return new Promise((resolve, reject) => {
        promisesArray.forEach(promise => {
            Promise.resolve(promise)
                .then(value => resolve(value))  
                .catch(err => reject(err));
        });
    });
};
