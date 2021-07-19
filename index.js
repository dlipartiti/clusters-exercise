const express = require('express');
const bodyParser = require('body-parser');
const boardConfigurationAPI = require('./src/app/middlewares/boardConfigurationMiddleware');
const cors = require('cors')

const app = express();
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api/board/configuration', boardConfigurationAPI);

app.listen(5001, function () {
  console.log('Example app listening on port 5001!');
});
