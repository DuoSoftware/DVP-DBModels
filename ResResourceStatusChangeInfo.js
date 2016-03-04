/**
 * Created by Heshan.i on 3/3/2016.
 */

module.exports = function (sequelize, DataTypes) {
    var ResResourceStatusChangeInfo = sequelize.define('DB_RES_ResourceStatusChangeInfo', {
            RecordId:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            ResourceId: {type: DataTypes.INTEGER},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            StatusType: {type:DataTypes.STRING},
            Status: {type:DataTypes.STRING},
            Reason: {type:DataTypes.STRING},
            OtherData: DataTypes.STRING
        }
    );


    return ResResourceStatusChangeInfo;
};