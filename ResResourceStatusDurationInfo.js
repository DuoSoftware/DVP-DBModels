/**
 * Created by Heshan.i on 1/10/2017.
 */


module.exports = function (sequelize, DataTypes) {
    var ResResourceStatusDurationInfo = sequelize.define('DB_RES_ResourceStatusDurationInfo', {
            RecordId:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            ResourceId: {type: DataTypes.INTEGER},
            StatusType: {type:DataTypes.STRING},
            Status: {type:DataTypes.STRING},
            Reason: {type:DataTypes.STRING},
            SessionId: {type:DataTypes.STRING},
            OtherData: DataTypes.STRING,
            Duration: DataTypes.INTEGER
        }
    );


    return ResResourceStatusDurationInfo;
};