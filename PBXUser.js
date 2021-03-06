module.exports = function(sequelize, DataTypes)
{
    var PBXUser = sequelize.define('CSDB_PBXUser',
        {
            UserUuid: {type:DataTypes.STRING, primaryKey:true},
            UserName: {type:DataTypes.STRING, allowNull:false},
            BypassMedia: DataTypes.BOOLEAN,
            IgnoreEarlyMedia: DataTypes.BOOLEAN,
            VoicemailEnabled: DataTypes.BOOLEAN,
            Pin: DataTypes.STRING,
            UserStatus: DataTypes.STRING, //DND, CALL_DIVERT, AVAILABLE
            AdvancedRouteMethod: DataTypes.STRING, //FORWARD, FOLLOW_ME
            FollowMeMechanism: DataTypes.STRING, //SEQUENTIAL, PARALLEL
            AllowOutbound: DataTypes.BOOLEAN,
            AllowIDD: DataTypes.BOOLEAN,
            AllowedNumbers: DataTypes.STRING,
            DeniedNumbers: DataTypes.STRING,
            RingTimeout: DataTypes.INTEGER,
            ScheduleId: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            PersonalGreetingEnabled: DataTypes.BOOLEAN,
            DayGreetingFile: DataTypes.STRING,
            NightGreetingFile: DataTypes.STRING,
            TimeZone: DataTypes.STRING
        }
    );

    return PBXUser;
};