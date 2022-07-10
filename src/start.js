const express = require('express');
const bodyParser = require('body-parser');

// Iinitialize
const app = express();

// Settings
app.set('port', process.env.PORT || 9001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Endpoints
app.use(require('./endpoints/index'));

// Listener
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });