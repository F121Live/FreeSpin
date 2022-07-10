const express = require('express');
const loginHandler = require('../handlers/login_handler');
const router = express.Router();
var config = require('../config');

// Listen to the root path, respond with a welcome message
if (config.IS_MAINTENANCE)
{
    router.get('/', async (req, res) => {
        console.debug('Connection received')
        res.send('MAINTENANCE');
    });
}
else
{
    router.get('/', async (req, res) => {
        console.debug('Connection received')
        res.send('SONICRUNNERS OK');
    });
}


router.get('/generate204/', async (req, res) => {
    res.status(204).send();
    console.debug('Status 204')
});

if (!config.IS_MAINTENANCE)
{
    // Login
    router.get('/Login/login/', async (req, res) => { console.debug(req + "  " + res); res.status(200); });
    router.get('/Sgn/sendApollo/', async (req, res) => { console.debug(req + "  " + res); });
    router.get('/Login/getVariousParameter/', async (req, res) => { console.debug(req + "  " + res); });
    router.get('/Player/getPlayerState/', async (req, res) => { console.debug(req + "  " + res); });
    router.get('/Player/getCharacterState/', async (req, res) => { console.debug(req + "  " + res); });
    router.get('/Player/getChaoState/', async (req, res) => { });
    router.get('/Spin/getWheelOptions/', async (req, res) => { });
    router.get('/Game/getDailyChalData/', async (req, res) => { });
    router.get('/Message/getMessageList/', async (req, res) => { });
    router.get('/Store/getRedstarExchangeList/', async (req, res) => { });
    router.get('/Game/getCostList/', async (req, res) => { });
    router.get('/Game/getMileageData/', async (req, res) => { });
    router.get('/Game/getCampaignList/', async (req, res) => { });
    router.get('/Chao/getChaoWheelOptions/', async (req, res) => { });
    router.get('/Chao/getPrizeChaoWheelSpin/', async (req, res) => { });
    router.get('/login/getInformation/', async (req, res) => { });
    router.get('/Leaderboard/getWeeklyLeaderboardOptions/', async (req, res) => { });
    router.get('/Leaderboard/getLeagueData/', async (req, res) => { });
    router.get('/Leaderboard/getWeeklyLeaderboardEntries/', async (req, res) => { });
    router.get('/Player/setUserName/', async (req, res) => { });
    router.get('/login/getTicker/', async (req, res) => { });
    router.get('/Login/loginBonus/', async (req, res) => { });
    router.get('/Login/getCountry/', async (req, res) => { });
    router.get('/Option/userResult/', async (req, res) => { });
    router.get('/Message/getMessage/', async (req, res) => { });
    router.get('/Login/loginBonusSelect/', async (req, res) => { });
    // Timed Mode
    router.get('/Game/quickActStart/', async (req, res) => { });
    router.get('/Game/quickPostGameResults/', async (req, res) => { });
    // Story Mode
    router.get('/Game/actStart/', async (req, res) => { });
    router.get('/Game/getMileageReward/', async (req, res) => { });
    router.get('/Game/actRetry/', async (req, res) => { });
    router.get('/Game/getFreeItemList/', async (req, res) => { });
    router.get('/Game/postGameResults/', async (req, res) => { });
    // Character Transactions
    router.get('/Character/changeCharacter/', async (req, res) => { });
    router.get('/Character/upgradeCharacter/', async (req, res) => { });
    router.get('/Character/unlockedCharacter//', async (req, res) => { });
    router.get('/Chao/equipChao/', async (req, res) => { });
    // Shop
    router.get('/Store/redstarExchange/', async (req, res) => { });
    // Friends (Required for iOS?)
    router.get('/Friend/getFacebookIncentive/', async (req, res) => { });
    // Roulette
    router.get('/RaidbossSpin/getItemStockNum/', async (req, res) => { });
    router.get('/Spin/commitWheelSpin/', async (req, res) => { });
    router.get('/Chao/commitChaoWheelSpin/', async (req, res) => { });
    router.get('/RaidbossSpin/getRaidbossWheelOptions/', async (req, res) => { });
    router.get('/RaidbossSpin/getPrizeRaidbossWheelSpin/', async (req, res) => { });
    router.get('/RaidbossSpin/commitRaidbossWheelSpin/', async (req, res) => { });
    // In-game migration
    router.get('/Login/getMigrationPassword/', async (req, res) => { });
    router.get('/Login/migration/', async (req, res) => { });
    // Event
    router.get('/Event/getEventList/', async (req, res) => { });
    router.get('/Event/getEventReward/', async (req, res) => { });
    router.get('/Event/getEventState/', async (req, res) => { });
}




module.exports = router;