const bodyParser = require('body-parser');
const crypto = require('crypto');

// Decrypt text from base64 to string
function Decrypt (key, iv, text) {
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    console.log(decipher);
    var decrypted = decipher.update(text, 'base64', 'utf8');
    console.log(decrypted);
    decrypted += decipher.final('utf8');
    return decrypted;
}

function ParseJson (body) {
    var obj = JSON.stringify(body);
    return JSON.parse(obj);
}

module.exports= {
        Decrypt,
        ParseJson
    }