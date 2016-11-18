/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var WalletCard = sequelize.define('DB_WalletCard', {
            CardId : DataTypes.STRING,
            Name : DataTypes.STRING,
            Description : DataTypes.STRING,
            WalletId : DataTypes.INTEGER,
            WalletCardId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return WalletCard;
};