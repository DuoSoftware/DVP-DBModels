module.exports = function(sequelize, DataTypes)
{
    var PBXUser = sequelize.define('CSDB_PBXUser',
        {
            UserUuid: DataTypes.STRING,
            BypassMedia: DataTypes.BOOLEAN,
            IgnoreEarlyMedia: DataTypes.BOOLEAN,
            VoicemailEnabled: DataTypes.BOOLEAN,
            ScheduleId: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return PBXUser;
};