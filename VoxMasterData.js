/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var VoxMasterData = sequelize.define('DB_VOX_MasterData', {
            TrunkId : DataTypes.STRING,
            ChannelCount : DataTypes.INTEGER,
            AvailableChannelCount : DataTypes.INTEGER,
            Status: DataTypes.BOOLEAN,
            MasterDataId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return VoxMasterData;
};