/**
 * Created by Rajinda on 6/29/2015.
 */



module.exports = function(sequelize, DataTypes) {
    var CampMapContactSchedule = sequelize.define('DB_CAMP_MapContactSchedule', {
            CampaignId: {type:DataTypes.INTEGER},
            CamScheduleId: {type:DataTypes.INTEGER},
            CamSchedule: {type:DataTypes.STRING},
            CategoryID:{type:DataTypes.INTEGER},
            TenantId: {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            MapContactScheduleId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return CampMapContactSchedule;
};
