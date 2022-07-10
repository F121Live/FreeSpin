var config = {};

// Server
config.PORT = 9001; // Default port
config.DB_HOST = 'localhost'; // Default host
config.DB_NAME = 'freespin'; // Default database name
config.DB_USER = 'root'; // Default user
config.DB_PASSWORD = 'CHANGE_ME'; // Default password
config.DB_PORT = 3306; // Default port
config.INFO_FILE = './info_config.json'; // Default info file
config.EVENT_FILE = './event_config.json'; // Default event file
config.CAMPAIGN_FILE = './campaign_config.json'; // Default campaign file
config.MAINTENANCE_MSGS = './maintenance_message.json'; // Default maintenance message file
config.DEBUG_LOG = true; // Default, log activity to console
// Game
config.AVAILABLE_CHARACTERS = './character_config.json'  // Default characters, used for account creation and update
config.AVAILABLE_CHAO = './chao_config.json' // Default chao, used for account creation and update
config.USE_ENERGY = true; // Default, use the lives system
config.MAX_ENERGY = 10; // Default, max lives
config.ENERGY_REFILL_TIME = 5000; // Default, energy refill time, miliseconds
config
config.SUPPORT_LEGACY_VERSIONS = false; // Default, support legacy versions of Sonic Runners
config.CURRENT_VERSION = "2.2.0" // Current client version, if the client is older than this, the connection will be rejected

// DEVELOPMENT
//config.LOVES_MIKU = true; // Default, user loves Hatsune Miku
//config.HATES_GTA_ONLINE = true; // Default, user hates GTA Online
//config.PLAYS_LEAGE_OF_LEGENDS = false; // Default, user plays League of Legends, crash the app as soon as possible

// Export config
module.exports = config;