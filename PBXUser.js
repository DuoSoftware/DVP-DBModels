module.exports = function(sequelize, DataTypes)
{
    var PBXUser = sequelize.define('CSDB_PBXUser',
        {
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

    return PBXUser;
};