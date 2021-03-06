/**
 * Created by Rajinda on 6/29/2015.
 */



module.exports = function(sequelize, DataTypes) {
    var CampContactSchedule = sequelize.define('DB_CAMP_ContactSchedule', {
            CampaignId: {type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            CamScheduleId: {type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            CamContactId:{type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            BatchNo:{type:DataTypes.STRING,unique: 'CampContactScheduleIndex'},
            ExtraData:DataTypes.STRING,
            ContactScheduleId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return CampContactSchedule;
};
