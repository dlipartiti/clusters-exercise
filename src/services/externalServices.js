const delayPromise = require('../utils/delayPromise')
const getRandomNumber = require('../utils/mathHelper')
const { INACTIVE_POINT, ACTIVE_POINT } = require('../constants/boardProperties');

class ExternalServices {
  static async getBoardConfiguration(numberOfColumns, numberOfRows) {
    const boardConfiguration = Array(numberOfRows).fill(0).map(() => {
      const randomWildcard = getRandomNumber(numberOfRows < numberOfColumns? numberOfRows : numberOfColumns);

      return new Array(numberOfColumns).fill(INACTIVE_POINT).map((value, columnIx) => {
        if (randomWildcard === columnIx) {
          return ACTIVE_POINT;
        }

        return value;
      })
    });

    return delayPromise(boardConfiguration, 1);
  }

  static sendPointLocations(pointLocations) {
    const realActivePointLocations = [];
    const randomWildCard = getRandomNumber(3);

    // This is to ensure at least one active point is marked from server side
    let firstActivePointMarked = false;

    pointLocations.forEach((row, rowIx) => {
      const rowActivePoints = [];
      row.forEach((cellValue, colIx) => {
        if (cellValue === ACTIVE_POINT) {
          if (!firstActivePointMarked) {
            rowActivePoints.push([rowIx, colIx]);
            firstActivePointMarked = !firstActivePointMarked;
            return;
          }

          if (randomWildCard === colIx || randomWildCard === rowIx) {
            rowActivePoints.push([rowIx, colIx]);
          }
        }
      })

      if (rowActivePoints?.length) {
        realActivePointLocations.push(rowActivePoints);
      }
    });

    return delayPromise(realActivePointLocations, 1);
  }
}

module.exports = ExternalServices;
