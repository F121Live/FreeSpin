const decrypt = require('../helpers/parser');

async function Login (key, iv, param, secure) {
    var json = JSON.parse(decrypt.Decrypt(key, iv, param.toString(), secure));
    uid = json.lineAuth.userId;
    password = json.lineAuth.password;
    version = json.version;
    if (uid !== 0) {
        console.log("[ENTERING LOGIN FOR PLAYER " + uid + "]");
        return true;
        //TODO: everything.
    } else {
        // CREATE PLAYER
    }
}

module.exports = {
    Login
}