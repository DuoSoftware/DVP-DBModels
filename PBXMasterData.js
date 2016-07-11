module.exports = function(sequelize, DataTypes) {
    var PBXMasterData = sequelize.define('CSDB_PBXMasterData', {
            BypassMedia: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            IgnoreEarlyMedia: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            VoicemailEnabled: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return PBXMasterData;
};