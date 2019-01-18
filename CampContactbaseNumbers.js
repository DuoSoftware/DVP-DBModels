/**
 * Created by Rajinda on 11/26/2018.
 */


module.exports = function(sequelize, DataTypes) {
    var CampContactbaseNumbers = sequelize.define('DB_CAMP_Contactbase_numbers', {
            ExternalUserID: {type: DataTypes.STRING, unique: 'CampContactbaseNumbersIndex'},
            CampaignId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            Status: DataTypes.BOOLEAN,
            TryCount: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
            TenantId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            CompanyId: {type: DataTypes.INTEGER, unique: 'CampContactbaseNumbersIndex'},
            BatchNo: {type: DataTypes.STRING},
            PreviewData: {type: DataTypes.TEXT},
            CamContactBaseNumberId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            DialerStatus : {unique: 'CampContactbaseNumbersIndex', type: DataTypes.ENUM, values: ['pick', 'dial', 'processing','added']}
        }
    );
    return CampContactbaseNumbers;
};

