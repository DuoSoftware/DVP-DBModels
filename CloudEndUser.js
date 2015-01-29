module.exports = function(sequelize, DataTypes) {
    var CloudEndUser = sequelize.define('CSDB_CloudEndPoint', {
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            SIPConnectivityProvision: DataTypes.INTEGER,
            CloudID: DataTypes.INTEGER,
            NetWorkID: DataTypes.INTEGER
        }
    );
    return CloudEndUser;
};

