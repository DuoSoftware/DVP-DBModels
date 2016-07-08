module.exports = function(sequelize, DataTypes) {
    var CloudEndUser = sequelize.define('CSDB_CloudEndUser', {
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'enduser_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'enduser_company_unique'},
            Domain: {type: DataTypes.STRING, allowNull: false, unique: 'enduser_company_unique'},
            SIPConnectivityProvision: {type: DataTypes.INTEGER, allowNull: false} //instance, profile, sheared
        }
    );
    return CloudEndUser;
};

