
module.exports = function(sequelize, DataTypes) {
    var CampCallbackInfo = sequelize.define('DB_CAMP_CallbackInfo', {
            CampaignId: DataTypes.INTEGER,
            ContactId: DataTypes.STRING,
            CamScheduleId:DataTypes.INTEGER,
            //CallBackId:DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN,
            CallBackId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true},
            CallBackId:DataTypes.STRING,
            Status:DataTypes.BOOLEAN


        }
    );
    return CampCallbackInfo;
};