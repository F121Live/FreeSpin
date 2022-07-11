const express = require('express');
const bodyParser = require('body-parser');
const decrypt = require('../helpers/parser');

const key = "Ec7bLaTdSuXuf5pW";
const iv = "DV3G4Kb7xflNqi5x";

async function Login (key, iv, param) {
    console.debug("LOGIN FUNCTION");
    var request = decrypt.Decrypt(key, iv, param);
    //decrypt.decrypt(first);
    console.log("LOGIN OK " + request);
}

module.exports = {
    Login
}