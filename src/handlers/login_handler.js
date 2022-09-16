const decrypt = require('../helpers/parser');
const crafter = require('../helpers/craft_response');
const respond = require('./response_handler');

async function Login (key, iv, param, secure) {
    var json = JSON.parse(decrypt.Decrypt(key, iv, param.toString(), secure)); // decrypted param
    uid = json.lineAuth.userId;
    password = json.lineAuth.password;
    version = json.version;
    if (uid !== 0) {
        console.log("[ENTERING LOGIN FOR PLAYER " + uid + "]");
        var newBase = respond.NewBaseInfo(respond.Emess.OK, respond.StatusCode.OK);
        var newBaseResponse = respond.NewBaseResponse(newBase);
        var crafted = crafter.Respond(JSON.stringify(newBaseResponse), secure, iv.toString(), key);
        console.log(newBase);
        console.log(crafted);
        return crafted;
        //TODO: Everything XD.
    } else {
        // CREATE PLAYER
    }
}

module.exports = {
    Login
}