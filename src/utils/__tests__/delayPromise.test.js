const delayPromise = require('../delayPromise');
jest.setTimeout(10000);

describe('Delay promise tests suite', () => {
  let dumbValue;
  let timeInSeconds;

  beforeEach(() => {
    dumbValue = 1;
    timeInSeconds = 1;
  });

  test('Should get the same value passed as function parameter after a while', async () => {
    return expect(delayPromise(dumbValue, timeInSeconds)).resolves.toEqual(dumbValue);
  });

  test('Should last specific time in seconds and also setTimeout function should be called once', () => {
    jest.useFakeTimers();
    delayPromise(dumbValue, timeInSeconds);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
  });
});
