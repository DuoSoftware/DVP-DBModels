module.exports = function(sequelize, DataTypes) {
    var IPPhoneConfig = sequelize.define('CSDB_IPPhoneConfig', {
            mac: {type: DataTypes.STRING, primaryKey: true},
            configdata: DataTypes.JSON,
            model: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );
    return IPPhoneConfig;
};