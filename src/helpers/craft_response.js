const express = require('express')
const router = express();
const decrypt = require('../helpers/parser');

function Respond(out, secureflag, iv, key){
    if (secureflag === "1"){ // Encrypt
        var response = new Object();
        response.param = decrypt.Encrypt(key, iv, out.toString(), secureflag);
        response.key = key;
        response.secure = secureflag;      
        console.log("responding!! " + JSON.stringify(response));
        return response;
    } else { // Respond Raw
        console.log("RESPOND RAW");
    }
}

module.exports = {
    Respond
}