/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var VoxChannelData = sequelize.define('DB_VOX_ChannelData', {
            TrunkId : DataTypes.STRING,
            ChannelCount : DataTypes.INTEGER,
            CapacityGroupId : DataTypes.STRING,
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId:  {type:DataTypes.INTEGER},
            Status: DataTypes.BOOLEAN,
            ChannelDataId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return VoxChannelData;
};