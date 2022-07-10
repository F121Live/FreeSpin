const express = require('express');
const router = express.Router();

// Listen to the root path, respond with a welcome message
router.get('/', async (req, res) => {
    console.debug('Connection received')
    res.send('Hello World!');
});

module.exports = router;