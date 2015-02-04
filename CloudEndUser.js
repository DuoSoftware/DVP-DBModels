module.exports = function(sequelize, DataTypes) {
    var CloudEndUser = sequelize.define('CSDB_CloudEndUser', {
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            Domain: DataTypes.INTEGER,
            SIPConnectivityProvision: DataTypes.INTEGER //instance, profile, sheared
        }
    );
    return CloudEndUser;
};

