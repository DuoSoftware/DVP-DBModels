/**
 * Created by Rajinda on 6/29/2015.
 */


<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = function (sequelize, DataTypes) {
    var CampScheduleInfo = sequelize.define('DB_CAMP_ScheduleInfo', {
            CampaignId: {type:DataTypes.INTEGER,unique: 'CampScheduleInfoIndex'},
            ScheduleId: {type:DataTypes.INTEGER,unique: 'CampScheduleInfoIndex'},
            ScheduleType: DataTypes.STRING,
            //CamScheduleId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            Status: DataTypes.BOOLEAN,
            CamScheduleId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
=======
>>>>>>> f22701c3c07b971a81951fd6e7efebd46bd4b7f0
module.exports = function(sequelize, DataTypes) {
    var CampScheduleInfo = sequelize.define('DB_CAMP_ScheduleInfo', {
            CampaignId: DataTypes.INTEGER,
            ScheduleId: DataTypes.INTEGER,
            ScheduleType:DataTypes.BOOLEAN,
            CamScheduleId:DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN
<<<<<<< HEAD
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
=======
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
>>>>>>> f22701c3c07b971a81951fd6e7efebd46bd4b7f0
        }
    );
    return CampScheduleInfo;
};

