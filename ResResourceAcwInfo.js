/**
 * Created by Heshan.i on 3/15/2017.
 */

module.exports = function (sequelize, DataTypes) {
    var ResResourceAcwInfo = sequelize.define('DB_RES_ResourceAcwInfo', {
            RecordId:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            BusinessUnit: {type:DataTypes.STRING},
            ResourceId: {type: DataTypes.INTEGER},
            SessionId: {type: DataTypes.STRING, model: "CallCDRProcessed", key: "Uuid"},
            Duration: DataTypes.INTEGER
        }
    );


    return ResResourceAcwInfo;
};