const bodyParser = require('body-parser');
const crypto = require('crypto');

// Decrypt the request body using AES-256-CBC taking the key and iv from the function parameters
function decrypt (key, iv, body) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);
    const decrypted = decipher.update(body, 'base64', 'utf8');
    return decrypted + decipher.final('utf8');
}

module.exports= {
        decrypt
    }