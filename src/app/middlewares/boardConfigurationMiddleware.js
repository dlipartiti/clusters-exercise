const express = require('express');
const router = express.Router();
const boardConfigurationServices = require('../../services/externalServices');
const bodyParser = require('body-parser');

// Get board initial configuration according to width and height values
router.get('/width/:width/height/:height', async (req, res, next) => {
  const { width, height } = req.params

  const numberOfColumns = width? Number(width) : 10;
  const numberOfRows = width? Number(height) : 10;

  try {
    const data = await boardConfigurationServices.getBoardConfiguration(numberOfColumns, numberOfRows);
    res.send(
      {
        author: {
          name: 'Dario',
          lastname: 'Lipartiti'
        },
        boardConfiguration: data
      }
    )
  } catch (err) {
    console.warn(`Router /api/board/configuration/width/${width}/height/${height} GET error`, err.message);
    next(err);
  }
});

router.post('', async (req, res, next) => {
  const { boardConfiguration } = req.body;

  try {
    const data = await boardConfigurationServices.sendPointLocations(boardConfiguration);
    res.send(
      {
        author: {
          name: 'Dario',
          lastname: 'Lipartiti'
        },
        serverBoardConfiguration: data
      }
    )
  } catch (err) {
    console.warn('Router /api/board/configuration POST error', err.message);
    next(err);
  }
});

module.exports = router;
