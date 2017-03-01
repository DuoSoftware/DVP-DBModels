/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var WalletSessionData = sequelize.define('DB_WalletSessionData', {
            Credit: DataTypes.DECIMAL,
            LockCredit: DataTypes.DECIMAL,
            InvokeBy: DataTypes.STRING,
            SessionID: {type:DataTypes.STRING,unique: 'WalletSessionData',allowNull: false},
            TenantId:  {type:DataTypes.INTEGER,unique: 'WalletSessionData',allowNull: false},
            CompanyId: {type:DataTypes.INTEGER,unique: 'WalletSessionData',allowNull: false},
            WalletSessionDataId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return WalletSessionData;
};