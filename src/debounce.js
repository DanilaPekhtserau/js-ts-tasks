/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
    let timeoutId = null;
    let lastCallTime = 0;  

    return function (...args) {
        const now = Date.now();

        if (!timeoutId) {
            fn.apply(this, args);
            timeoutId = setTimeout(() => {
                timeoutId = null;
            }, delay);
        } 
        else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                timeoutId = null;
            }, delay);
        }
    };
};