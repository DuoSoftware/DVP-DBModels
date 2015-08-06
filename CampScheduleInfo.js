/**
 * Created by Rajinda on 6/29/2015.
 */


<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
    var CampScheduleInfo = sequelize.define('DB_CAMP_ScheduleInfo', {
            CampaignId: DataTypes.INTEGER,
            ScheduleId: DataTypes.INTEGER,
            ScheduleType:DataTypes.BOOLEAN,
            CamScheduleId:DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN
=======
module.exports = function (sequelize, DataTypes) {
    var CampScheduleInfo = sequelize.define('DB_CAMP_ScheduleInfo', {
            CampaignId: DataTypes.INTEGER,
            ScheduleId: DataTypes.INTEGER,
            ScheduleType: DataTypes.BOOLEAN,
            CamScheduleId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            Status: DataTypes.BOOLEAN
>>>>>>> master
        }
    );
    return CampScheduleInfo;
};

