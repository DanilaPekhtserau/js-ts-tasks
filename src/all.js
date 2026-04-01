/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
    if (!promisesArray || promisesArray.length === 0) {
    }

    return new Promise((resolve, reject) => {
        const results = new Array(promisesArray.length);
        let completed = 0;

        promisesArray.forEach((p, i) => {
            Promise.resolve(p)
                .then(value => {
                    results[i] = value;
                    completed++;

                    if (completed === promisesArray.length) {
                        resolve(results); 
                    }
                })
                .catch(err => {
                    reject(err);
                });
        });
    });
};
