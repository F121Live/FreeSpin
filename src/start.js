const express = require('express');
const bodyParser = require('body-parser');

// Iinitialize
const app = express();
var config = require('./config');

// Settings
app.set('port', config.PORT || 9001);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Endpoints
app.use(require('./endpoints/index'));

// Listener
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
    console.log('Reading config file...');
    console.log(config);
  });