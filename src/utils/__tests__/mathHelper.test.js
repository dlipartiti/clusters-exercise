const getRandomNumber = require('../mathHelper');

describe('Math helper tests suite', () => {
  test('Should get a random rounded number between 1 and maxNumber', () => {
    const maxNumber = 5;

    // Call getRandomNumber(..) twice intentionally
    expect(getRandomNumber(maxNumber)).toBeGreaterThanOrEqual(1);
    expect(getRandomNumber(maxNumber)).toBeLessThanOrEqual(5);
  });

  test('Should get positive number if maxNumber is a negative one', () => {
    const maxNumber = -5;

    expect(getRandomNumber(maxNumber)).toBeGreaterThan(0);
  });
});
