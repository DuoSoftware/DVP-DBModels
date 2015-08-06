/**
 * Created by Rajinda on 6/29/2015.
 */




module.exports = function(sequelize, DataTypes) {
    var CampCallbackInfo = sequelize.define('DB_CAMP_CallbackInfo', {
            CampaignId: DataTypes.INTEGER,
            ContactId: DataTypes.STRING,
            CamScheduleId:DataTypes.INTEGER,
<<<<<<< HEAD
            //CallBackId:DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN,
            CallBackId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
=======
            CallBackId:DataTypes.STRING,
            Status:DataTypes.BOOLEAN
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e

        }
    );
    return CampCallbackInfo;
};