/**
 * Created by Rajinda on 3/24/2016.
 */
module.exports = function (sequelize, DataTypes) {
    var BuyPhoneNumbers = sequelize.define('DB_Buy_PhoneNumbers', {
            PhoneNumber: {type: DataTypes.STRING, primaryKey: true},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            Status: DataTypes.BOOLEAN,
            OperationalStatus:{type: DataTypes.STRING, allowNull: false},
            OperatorId: {type: DataTypes.INTEGER, allowNull: false},
            TrunkId: {type: DataTypes.INTEGER, allowNull: false},
            ExtraData: DataTypes.STRING,
            Type: DataTypes.STRING,
            BuyerCompanyId: {type: DataTypes.INTEGER, allowNull: true},
            BuyerTenantId: {type: DataTypes.INTEGER, allowNull: true}
        }
    );
    return BuyPhoneNumbers;
};