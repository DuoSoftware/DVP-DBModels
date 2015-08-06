/**
 * Created by Rajinda on 6/29/2015.
 */


<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
    var CampCampaignInfo = sequelize.define('DB_CAMP_CampaignInfo', {
            CampaignName: {type: DataTypes.STRING, allowNull: false, unique: true},
            CampaignMode: DataTypes.STRING,
            CampaignChannel: DataTypes.STRING,
            DialoutMechanism: DataTypes.STRING,
            TenantId: DataTypes.INTEGER,
=======
module.exports = function(sequelize, DataTypes) {
    var CampCampaignInfo = sequelize.define('DB_CAMP_CampaignInfo', {
            CampaignName: DataTypes.STRING,
            CampaignnMode: DataTypes.STRING,
            CampaignChannel:DataTypes.STRING,
            DialoutMechanism:DataTypes.STRING,
            TenantId:DataTypes.INTEGER,
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
            CompanyId: DataTypes.INTEGER,
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
<<<<<<< HEAD
            Extensions: DataTypes.STRING,
            //Concurrent: DataTypes.STRING,
            OperationalStatus: DataTypes.STRING,
            Status: DataTypes.BOOLEAN,
            CampaignId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
=======
            CampaignId: DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
        }
    );


    return CampCampaignInfo;
};