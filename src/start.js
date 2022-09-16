const express = require('express');
const log = require('./helpers/logging');
const bodyParser = require('body-parser');

// Iinitialize
const app = express();
var config = require('./config');
//var database = require('./database/start_database');
//database.StartDatabase(config);

// Settings
app.set('port', config.PORT || 9001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
if (config.IS_MAINTENANCE) {
  log.GameLog('!!!!!!!! NOTICE: Server is running in maintenance mode !!!!!!!!', 'server');
}

// Endpoints
app.use(require('./endpoints/index'));

// Listener
app.listen(app.get('port',), '0.0.0.0', () => {
    log.GameLog('Server is starting in localhost at port ' + (app.get('port')), 'server');
    log.GameLog('Reading config file...', 'server');
    console.log(config);
  });