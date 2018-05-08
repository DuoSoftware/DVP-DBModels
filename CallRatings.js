/**
 * Created by Kalana on 12/20/2016.
 */

module.exports = function (sequelize, DataTypes) {
    var CallRatings = sequelize.define('DB_CallRatings', {
        Provider :  {type: DataTypes.STRING, primaryKey: true},
        PaymentData: DataTypes.TEXT
        }
    );
    return CallRatings;
};
