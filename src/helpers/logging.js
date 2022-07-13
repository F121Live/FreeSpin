function GameLog (text, type){
    switch (type) {
        case "warn":
            console.log("[WARN: " + text + "]");
            break;
        case "error":
            console.log("!!!!!![ERROR: " + text + "]!!!!!!");
            break;
        case "server":
            console.log("[SERVER: " + text + "]");
            break;
        default:
            console.log("[GAME: " + text + "]");
            break;
    }
    
}
module.exports = {
    GameLog
}