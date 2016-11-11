/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var VoxOderData = sequelize.define('DB_VOX_OderData', {
            VoxOderId : DataTypes.STRING,
            ChannelCount : DataTypes.INTEGER,
            Dids : {type:DataTypes.ARRAY(DataTypes.STRING)} ,
            OtherJsonData: DataTypes.JSON,
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId:  {type:DataTypes.INTEGER},
            Status: DataTypes.BOOLEAN,
            OderDataId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return VoxOderData;
};