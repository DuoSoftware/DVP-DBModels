module.exports = function(sequelize, DataTypes)
{
    var PBXUser = sequelize.define('CSDB_PBXUser',
        {
            UserUuid: {type:DataTypes.STRING, primaryKey:true},
            UserName: {type:DataTypes.STRING, allowNull:false},
            BypassMedia: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            IgnoreEarlyMedia: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            VoicemailEnabled: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            Pin: DataTypes.STRING,
            UserStatus: {type: DataTypes.STRING, allowNull: false, defaultValue: 'AVAILABLE'}, //DND, CALL_DIVERT, AVAILABLE
            AdvancedRouteMethod: {type: DataTypes.STRING, allowNull: false, defaultValue: 'NONE'}, //FORWARD, FOLLOW_ME
            FollowMeMechanism: {type: DataTypes.STRING, allowNull: false, defaultValue: 'SEQUENTIAL'}, //SEQUENTIAL, PARALLEL
            AllowOutbound: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            AllowIDD: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            AllowedNumbers: DataTypes.STRING,
            DeniedNumbers: DataTypes.STRING,
            RingTimeout: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 60},
            ScheduleId: DataTypes.INTEGER,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            PersonalGreetingEnabled: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            DayGreetingFile: DataTypes.STRING,
            NightGreetingFile: DataTypes.STRING,
            TimeZone: DataTypes.STRING
        }
    );

    return PBXUser;
};