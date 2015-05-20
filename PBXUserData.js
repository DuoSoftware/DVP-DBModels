module.exports = function(sequelize, DataTypes) {
    var PBXUserData = sequelize.define('CSDB_PBXMasterData', {
            UserStatus: DataTypes.STRING, //DND, CALL_DIVERT, AVAILABLE
            CallDivertNumber: DataTypes.STRING,
            AdvancedRouteMethod: DataTypes.STRING, //FORWARD, FOLLOW_ME
            BypassMedia: DataTypes.BOOLEAN,
            IgnoreEarlyMedia: DataTypes.BOOLEAN,
            VoicemailEnabled: DataTypes.BOOLEAN,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return PBXUserData;
};