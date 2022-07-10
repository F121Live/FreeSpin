const express = require('express');
const bodyParser = require('body-parser');
const decrypt = require('../helpers/parser');

async function Login (req, res) {
    console.debug(req + "  " + res);
    console.debug("LOGIN FUNCTION");
    decrypt.decrypt(req);
    res.send("LOGIN OK");
}