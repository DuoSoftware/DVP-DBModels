/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var Wallet = sequelize.define('DB_Wallet', {
            StripeId : DataTypes.STRING,
            Description : DataTypes.STRING,
            Tag : {type:DataTypes.ARRAY(DataTypes.STRING)} ,
            CurrencyISO: DataTypes.STRING,
            Credit: DataTypes.DECIMAL,
            TenantId:  {type:DataTypes.INTEGER,unique: 'WalletIndex',allowNull: false},
            CompanyId: {type:DataTypes.INTEGER,unique: 'WalletIndex',allowNull: false},
            Owner: {type:DataTypes.STRING,unique: 'WalletIndex',allowNull: false},
            Status: DataTypes.BOOLEAN,
            AutoRecharge: DataTypes.BOOLEAN,
            AutoRechargeAmount: DataTypes.DECIMAL,
            ThresholdValue: DataTypes.DECIMAL,
            WalletId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return Wallet;
};