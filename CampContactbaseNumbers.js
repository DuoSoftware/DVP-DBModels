/**
 * Created by Rajinda on 11/26/2018.
 */


module.exports = function(sequelize, DataTypes) {
    var CampContactbaseNumbers = sequelize.define('DB_CAMP_Contactbase_numbers', {
            ExternalUserID: {type: DataTypes.STRING, unique: 'CampContactbaseNumbersIndex'},
            CampaignId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            Status: DataTypes.BOOLEAN,
            TenantId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            CompanyId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            BatchNo: {type: DataTypes.STRING},
            PreviewData: {type: DataTypes.TEXT},
            CamContactBaseNumberId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            DialerStatus : {type: DataTypes.ENUM, values: ['pick', 'dial', 'processing','added','removed_by_system','removed_by_api']},
            CamScheduleId: {type:DataTypes.INTEGER,unique: 'CampContactbaseNumbersIndex'}
        }
    );
    return CampContactbaseNumbers;
};

