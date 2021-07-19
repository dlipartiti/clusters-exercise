const ExternalServices = require('../externalServices');
jest.setTimeout(10000);

describe('External services tests suite', () => {
  let numberOfColumns;
  let numberOfRows;

  beforeEach(() => {
    numberOfColumns = 10;
    numberOfRows = 10;
  });

  test('Should get a matrix with length equals to 10', () => {
    return expect(ExternalServices.getBoardConfiguration(numberOfColumns, numberOfRows)).resolves.toHaveLength(10);
  });

  test('Should get pointLocations response not falsy and with length greater than 0', async () => {
    const pointLocations = [['-', 'o'], ['-', 'o']];

    const serverPointLocations = await ExternalServices.sendPointLocations(pointLocations);
    expect(serverPointLocations).not.toBeNull();
    expect(serverPointLocations.length).toBeGreaterThan(0);
  });
});
