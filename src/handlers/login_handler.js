const express = require('express');
const bodyParser = require('body-parser');
const decrypt = require('../helpers/parser');

const key = "Ec7bLaTdSuXuf5pW";
const iv = "DV3G4Kb7xflNqi5x";

async function Login (first, second) {
    console.debug(first + "  " + second);
    console.debug("LOGIN FUNCTION");
    decrypt.decrypt(key, iv, first.body);
    //decrypt.decrypt(first);
    second.send("LOGIN OK");
}

module.exports = {
    Login
}