/**
 * Created by Kalana on 12/20/2016.
 */

module.exports = function (sequelize, DataTypes) {
    var CallRatings = sequelize.define('DB_CallRatings', {
        Country : {type: DataTypes.STRING, primaryKey: true},
        NumberType : DataTypes.STRING,
        AreaCode: DataTypes.STRING,
        SetupFee: DataTypes.STRING,
        MonthlyFee:  DataTypes.STRING,
        CallCapacityZones: DataTypes.STRING,
        LandlineSetup: DataTypes.STRING,
        LandlinePerMin: DataTypes.STRING,
        MobileSetup: DataTypes.STRING,
        MobilePerMin: DataTypes.STRING,
        PayphoneSetup: DataTypes.STRING,
        PayphonePerMin: DataTypes.STRING
        }
    );
    return CallRatings;
};
