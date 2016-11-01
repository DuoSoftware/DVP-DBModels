/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var VoxPendingChannelData = sequelize.define('DB_VOX_PendingChannelData', {
            ReqChannelCount : DataTypes.INTEGER,
            AllocateChannelCount : DataTypes.INTEGER,
            PendingChannelCount : DataTypes.INTEGER,
            Status: DataTypes.BOOLEAN,
            PendingDataId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return VoxPendingChannelData;
};