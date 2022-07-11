const express = require('express');
const bodyParser = require('body-parser');

// Iinitialize
const app = express();
var config = require('./config');
var database = require('./database/start_database');
database.StartDatabase(config);

// Settings
app.set('port', config.PORT || 9001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
if (config.MAINTENANCE) {
  console.log('NOTICE: Server is running in maintenance mode!!!!');
}

// Endpoints
app.use(require('./endpoints/index'));

// Listener
app.listen(app.get('port',), '0.0.0.0', () => {
    console.log('Server is starting in localhost at port', app.get('port'));
    console.log('Reading config file...');
    console.log(config);
  });