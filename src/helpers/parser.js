const bodyParser = require('body-parser');
const log = require('./logging');
const crypto = require('crypto');

// Decrypt game json.param from AES-128-CBC to readable string
function Decrypt (key, iv, text, secure) {
    if (secure == 1)
    {
        var decipher = crypto.createDecipheriv('aes-128-cbc', iv.toString(), key);
        var dec = decipher.update(text, 'base64', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    } else {
        log.GameLog("Does not need decryption");
        return text;
    }
}

function Encrypt (key, iv, text, secure) {
    if (secure == 1)
    {
        var cipher = crypto.createCipheriv('aes-128-cbc', iv.toString(), key);
        var enc = cipher.update(text, 'utf8', 'base64');
        enc += cipher.final('base64');
        return enc;
    } else {
        log.GameLog("Does not need encryption");
        return text;
    }
}

function ParseJson (body) {
    var obj = JSON.stringify(body);
    return JSON.parse(obj);
}

module.exports= {
        Decrypt,
        Encrypt,
        ParseJson
    }