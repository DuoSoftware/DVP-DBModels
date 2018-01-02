/**
 * Created by Heshan.i on 2/2/2017.
 */


module.exports = function (sequelize, DataTypes) {
    var ResResourceTaskRejectInfo = sequelize.define('DB_RES_ResourceTaskRejectInfo', {
            RecordId:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            BusinessUnit: {type:DataTypes.STRING},
            ResourceId: {type: DataTypes.INTEGER},
            Task: {type:DataTypes.STRING},
            Reason: {type:DataTypes.STRING},
            SessionId: {type:DataTypes.STRING},
            OtherData: DataTypes.STRING
        }
    );


    return ResResourceTaskRejectInfo;
};