/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var WalletHistory = sequelize.define('DB_WalletHistory', {
            StripeId: DataTypes.STRING,
            Description: DataTypes.STRING,
            OtherJsonData: DataTypes.JSON,
            CurrencyISO: DataTypes.STRING,
            Tag: {type: DataTypes.ARRAY(DataTypes.STRING)},
            Credit: DataTypes.DECIMAL,
            TenantId: {type: DataTypes.INTEGER},
            CompanyId: {type: DataTypes.INTEGER},
            WalletId: {type: DataTypes.INTEGER},
            Operation: DataTypes.STRING,
            InvokeBy: DataTypes.STRING,
            Reason: DataTypes.STRING,
            WalletHistoryId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return WalletHistory;
};