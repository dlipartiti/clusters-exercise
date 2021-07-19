const delayPromise = (returnValue, delayInSeconds) => new Promise(resolve => setTimeout(() => resolve(returnValue), delayInSeconds * 1000));

module.exports = delayPromise;
