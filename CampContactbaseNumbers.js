/**
 * Created by Rajinda on 11/26/2018.
 */


module.exports = function(sequelize, DataTypes) {
    var CampContactbaseNumbers = sequelize.define('DB_CAMP_Contactbase_numbers', {
            ExternalUserID: {type: DataTypes.STRING},
            CampaignId: {type: DataTypes.INTEGER},
            Status: DataTypes.BOOLEAN,
            TenantId: {type: DataTypes.INTEGER},
            CompanyId: {type: DataTypes.INTEGER},
            BatchNo: {type: DataTypes.STRING},
            PreviewData: {type: DataTypes.TEXT},
            CamContactBaseNumberId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            DialerStatus : {type: DataTypes.ENUM, values: ['pick', 'dial', 'processing','added']}
        }
    );
    return CampContactbaseNumbers;
};

