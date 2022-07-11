const express = require('express');
const bodyParser = require('body-parser');
const decrypt = require('../helpers/parser');

async function Login (first, second) {
    console.debug(first + "  " + second);
    console.debug("LOGIN FUNCTION");
    //decrypt.decrypt(first);
    second.send("LOGIN OK");
}

module.exports = {
    Login
}