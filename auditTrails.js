/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var AuditTrails = sequelize.define('DB_AuditTrails', {
            KeyProperty: {type:DataTypes.STRING},
            OldValue: {type:DataTypes.STRING},
            NewValue:  {type:DataTypes.STRING},
            Description: {type:DataTypes.STRING},
            Author: {type:DataTypes.STRING},
            User: {type:DataTypes.STRING},
            OtherData: DataTypes.STRING,
            ObjectType: DataTypes.STRING,
            Action: {type: DataTypes.ENUM('DELETE', 'UPDATE','SAVE','VIEW'), defaultValue: 'VIEW', allowNull: false},
            Application: DataTypes.STRING,
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId:  {type:DataTypes.INTEGER},
            AuditTrailsId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return AuditTrails;
};