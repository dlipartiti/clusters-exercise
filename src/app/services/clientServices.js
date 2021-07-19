import axios from 'axios';

export const getBoardConfiguration = (numberOfColumns, numberOfRows) => {
  return axios.get(`http://localhost:5001/api/board/configuration/width/${numberOfColumns}/height/${numberOfRows}`)
    .then(res => {
      const { boardConfiguration } = res.data;
      return boardConfiguration;
    })
    .catch((error) => console.error('Error: ', error))
};

export const submitBoardConfiguration = (currentBoardConfiguration) => {
  const body = JSON.stringify({
    boardConfiguration: currentBoardConfiguration
  });

  return axios.post('http://localhost:5001/api/board/configuration', body, {
    headers: {
      'Content-Type': 'application/JSON'
    }
  })
    .then(res => {
      const { serverBoardConfiguration } = res.data;
      return serverBoardConfiguration;
    })
    .catch((error) => console.error('Error: ', error))
};
