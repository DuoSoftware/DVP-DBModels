/**
 * Created by Rajinda on 6/29/2015.
 */



module.exports = function(sequelize, DataTypes) {
    var CampMapContactSchedule = sequelize.define('DB_CAMP_MapContactSchedule', {
            CamSchedule: {type:DataTypes.STRING},
            TenantId: {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            CampaignId: {type:DataTypes.INTEGER,unique: 'MapContactScheduleIndex',allowNull: false},
            CamScheduleId: {type:DataTypes.INTEGER,unique: 'MapContactScheduleIndex',allowNull: false},
            CategoryID: {type:DataTypes.INTEGER,unique: 'MapContactScheduleIndex',allowNull: false},
            MapContactScheduleId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return CampMapContactSchedule;
};
