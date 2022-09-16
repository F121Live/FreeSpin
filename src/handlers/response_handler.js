const StatusCode = {
    OK: 0,
    ServerSecurityError: -19001,
    VersionDifference: -19002, // server/client version mismatch
    DecryptionFailure: -19003,
    ParamHashDifference: -19004,
    ServerNextVersion: -19990, // show next version maintenance window
    ServerMaintenance: -19997,
    ServerBusyError: -19998,
    ServerSystemError: -19999,
    RequestParamError: -10100,
    NotAvailablePlayer: -10101,
    MissingPlayer: -10102,
    ExpirationSession: -10103,
    PassWordError: -10104,
    InvalidSerialCode: -10105,
    UsedSerialCode: -10106,
    SequenceIDError: -10107,
    HspWebApiError: -10110,
    ApolloWebApiError: -10115,
    DataMismatch: -30120,
    MasterDataMismatch: -10121,
    NotEnoughRedStarRings: -20130,
    NotEnoughRings: -20131,
    NotEnoughEnergy: -20132,
    NotEnoughChallenge: -20133,
    RouletteUseLimit: -30401,
    RouletteBoardReset: -30411,
    CharacterLevelLimit: -20601,
    AllChaoLevelLimit: -20602,
    AlreadyInvitedFriend: -30801,
    AlreadyRequestedEnergy: -30901,
    AlreadySentEnergy: -30902,
    ReceiveFailureMessage: -30910,
    AlreadyExistedPrePurchase: -11001,
    AlreadyRemovedPrePurchase: -11002,
    InvalidReceiptData: -11003,
    AlreadyProcessedReceipt: -11004,
    EnergyLimitPurchaseTrigger: -21010,
    AmountExceedingLimit: -31001,
    NotStartEvent: -10201,
    AlreadyEndEvent: -10202,
    UsernameInvalidChars: -40000, // for 2.1.0 and later
    UsernameTooLong: -40001, // for 2.1.0 and later
    UsernameHasNGWord: -40002, // for 2.1.0 and later
    VersionForApplication: -999002,
    TimeOut: -7,
    OtherError: -8,
    NotReachability: -10,
    InvalidResponse: -20,
    ClientError: -400,
    InternalServerError: -500,
    HspPurchaseError: -600,
    ServerBusy: -700
}

const Emess = {
    OK: "\u6210\u529f", // Unicode IDs
    BadPassword: "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e0d\u6b63" // Unicode IDs
}

function BaseInfo(ErrorMessage, CloseTime, Seq, ServerTime, StatusCode) {
	this.errorMessage = ErrorMessage;
	this.closeTime = CloseTime;
    this.seq = Seq;
    this.server_time = ServerTime;
    this.statusCode = StatusCode;
}

function BaseResponse(baseInfo, assets_version, client_data_version, data_version, info_version, version, freeSpinVersion) {
	baseInfo,
	assets_version,
	client_data_version,
	data_version,
	info_version,
	version,
	freeSpinVersion
}

function NewBaseInfo(errme, statusCode) {
    var info = new BaseInfo;
    info.closeTime = -2;
    info.server_time = Math.floor(Date.now() / 1000); // Unix timestamp in seconds
    info.seq = 0;
    info.errorMessage = errme;
    info.statusCode = statusCode;
    return info;
}

function NewBaseResponse(baseInfo){ // Dummy info, I will use data from the config file later on
    var base = new BaseResponse
    base.baseInfo = baseInfo,
    base.assets_version = "054",
    base.client_data_version = "2.2.2",
    base.data_version = "054",
    base.info_version = "017",
    base.version = "2.2.2",
    base.freeSpinVersion = "1.0"
    return base;
}

module.exports = {
    NewBaseInfo,
    NewBaseResponse,
    Emess,
    StatusCode
}