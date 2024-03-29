const express = require('express');
const loginHandler = require('../handlers/login_handler');
const log = require('../helpers/logging');
const bodyParser = require('body-parser');
const router = express();
var config = require('../config');
var helpers = require('../helpers/parser');

router.set('view engine','ejs');
router.set('views', './src/control_page');
router.use('/css', express.static('./src/control_page/css'));
router.use('/res', express.static('./src/control_page/res'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var iv = "Ec7bLaTdSuXuf5pW";

// Listen to the root path, respond with a welcome message
if (config.IS_MAINTENANCE)
{
    router.get('/', async (req, res) => {
        log.GameLog('Connection received')
        res.send('MAINTENANCE');
    });
}
else
{
    router.get('/', async (req, res) => {
        log.GameLog('Connection received')
        res.send('SONICRUNNERS OK');
    });
}


router.get('/generate204/', async (req, res) => {
    res.status(204).send();
    log.GameLog('Status 204')
});
router.get('/panel/', async (req, res) => {
    res.render('control');
    log.GameLog('Status 204')
});

if (!config.IS_MAINTENANCE)
{
    // Login
    router.post('/Login/login/', async (req, res) => {
        var json = helpers.ParseJson(req.body);
        log.GameLog(JSON.stringify(req.body) + "  " + json.key + " " + json.secure, "warn");
        var loginStatus = await loginHandler.Login(json.key, iv, json.param, json.secure);
        res.status(200).send(JSON.stringify(loginStatus)); 
    });
    router.post('/Sgn/sendApollo/', async (req, res) => { console.debug(req + "  " + res); });
    router.post('/Login/getVariousParameter/', async (req, res) => { console.debug(req + "  " + res); });
    router.post('/Player/getPlayerState/', async (req, res) => { console.debug(req + "  " + res); });
    router.post('/Player/getCharacterState/', async (req, res) => { console.debug(req + "  " + res); });
    router.post('/Player/getChaoState/', async (req, res) => { });
    router.post('/Spin/getWheelOptions/', async (req, res) => { });
    router.post('/Game/getDailyChalData/', async (req, res) => { });
    router.post('/Message/getMessageList/', async (req, res) => { });
    router.post('/Store/getRedstarExchangeList/', async (req, res) => { });
    router.post('/Game/getCostList/', async (req, res) => { });
    router.post('/Game/getMileageData/', async (req, res) => { });
    router.post('/Game/getCampaignList/', async (req, res) => { });
    router.post('/Chao/getChaoWheelOptions/', async (req, res) => { });
    router.post('/Chao/getPrizeChaoWheelSpin/', async (req, res) => { });
    router.post('/login/getInformation/', async (req, res) => { });
    router.post('/Leaderboard/getWeeklyLeaderboardOptions/', async (req, res) => { });
    router.post('/Leaderboard/getLeagueData/', async (req, res) => { });
    router.post('/Leaderboard/getWeeklyLeaderboardEntries/', async (req, res) => { });
    router.post('/Player/setUserName/', async (req, res) => { });
    router.post('/login/getTicker/', async (req, res) => { });
    router.post('/Login/loginBonus/', async (req, res) => { });
    router.post('/Login/getCountry/', async (req, res) => { });
    router.post('/Option/userResult/', async (req, res) => { });
    router.post('/Message/getMessage/', async (req, res) => { });
    router.post('/Login/loginBonusSelect/', async (req, res) => { });
    // Timed Mode
    router.post('/Game/quickActStart/', async (req, res) => { });
    router.post('/Game/quickPostGameResults/', async (req, res) => { });
    // Story Mode
    router.post('/Game/actStart/', async (req, res) => { });
    router.post('/Game/getMileageReward/', async (req, res) => { });
    router.post('/Game/actRetry/', async (req, res) => { });
    router.post('/Game/getFreeItemList/', async (req, res) => { });
    router.post('/Game/postGameResults/', async (req, res) => { });
    // Character Transactions
    router.post('/Character/changeCharacter/', async (req, res) => { });
    router.post('/Character/upgradeCharacter/', async (req, res) => { });
    router.post('/Character/unlockedCharacter//', async (req, res) => { });
    router.post('/Chao/equipChao/', async (req, res) => { });
    // Shop
    router.post('/Store/redstarExchange/', async (req, res) => { });
    // Friends (Required for iOS?)
    router.post('/Friend/getFacebookIncentive/', async (req, res) => { });
    // Roulette
    router.post('/RaidbossSpin/getItemStockNum/', async (req, res) => { });
    router.post('/Spin/commitWheelSpin/', async (req, res) => { });
    router.post('/Chao/commitChaoWheelSpin/', async (req, res) => { });
    router.post('/RaidbossSpin/getRaidbossWheelOptions/', async (req, res) => { });
    router.post('/RaidbossSpin/getPrizeRaidbossWheelSpin/', async (req, res) => { });
    router.post('/RaidbossSpin/commitRaidbossWheelSpin/', async (req, res) => { });
    // In-game migration
    router.post('/Login/getMigrationPassword/', async (req, res) => { });
    router.post('/Login/migration/', async (req, res) => { });
    // Event
    router.post('/Event/getEventList/', async (req, res) => { });
    router.post('/Event/getEventReward/', async (req, res) => { });
    router.post('/Event/getEventState/', async (req, res) => { });
}




module.exports = router;