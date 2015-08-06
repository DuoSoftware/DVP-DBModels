/**
 * Created by Rajinda on 6/29/2015.
 */



module.exports = function(sequelize, DataTypes) {
    var CampContactSchedule = sequelize.define('DB_CAMP_ContactSchedule', {
<<<<<<< HEAD
            CampaignId: {type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            CamScheduleId: {type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            CamContactId:{type:DataTypes.INTEGER,unique: 'CampContactScheduleIndex'},
            //ContactScheduleId:DataTypes.INTEGER
            ContactScheduleId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
=======
            CampaignId: DataTypes.INTEGER,
            CamScheduleId: DataTypes.INTEGER,
            CamContactId:DataTypes.INTEGER,
            ContactScheduleId:DataTypes.INTEGER
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
        }
    );
    return CampContactSchedule;
};
