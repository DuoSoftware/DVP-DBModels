module.exports = function(sequelize, DataTypes) {

    return sequelize.define('AUTH_LicenseKeys', {
            CompanyId: { type:DataTypes.INTEGER, allowNull: false },
            TenantId: { type:DataTypes.INTEGER, allowNull: false },
            CallServerId: { type: DataTypes.INTEGER, allowNull: false },
            LicenseKey: { type: DataTypes.TEXT, allowNull: false },
            ExpireDate: DataTypes.DATE
        }
    );

};