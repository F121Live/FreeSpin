const express = require('express');
const bodyParser = require('body-parser');

// Iinitialize
const app = express();
var config = require('./config');
var maintenance = false;

// Settings
app.set('port', config.PORT || 9001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
if (process.argv = "--maintenance") {
  console.log('NOTICE: Server is running in maintenance mode!!!!');
  maintenance = true;
}
module.exports = maintenance;

// Endpoints
app.use(require('./endpoints/index'));

// Listener
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
    console.log('Reading config file...');
    console.log(config);
  });