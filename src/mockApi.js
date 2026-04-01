/**
 * Create the function mocker which will return defined data with 1 second delay.
 * It might be helpful in Front-end development when there is a need to make sure that your
 * interface works well with data that you get asynchronously. The use of the function is shown below:
 *
 *@response {object}
 */
module.exports.mockApi = function mockApi(response, delay = 1000) {

    return function mock() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (response instanceof Error) {
                    reject(response);
                } else if (response && typeof response.then === 'function') {
                    response.then(resolve).catch(reject);
                } else {
                    resolve(response);
                }
            }, delay || 1000);
        });
    };
};