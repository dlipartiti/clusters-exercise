const getRandomNumber = (maxNumber) => maxNumber < 0
  ? Math.floor(Math.random() * -maxNumber) + 1
  : Math.floor(Math.random() * maxNumber) + 1;

module.exports = getRandomNumber;
