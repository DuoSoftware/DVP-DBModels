/**
 * Created by Rajinda on 6/29/2015.
 */


module.exports = function(sequelize, DataTypes) {
    var CampConfigurations = sequelize.define('DB_CAMP_Configurations', {
            CampaignId: DataTypes.INTEGER,
            ChannelConcurrency: DataTypes.INTEGER,
            AllowCallBack:DataTypes.BOOLEAN,
            MaxCallBackCount:DataTypes.INTEGER,
<<<<<<< HEAD
            ConfigureId:DataTypes.BOOLEAN,
<<<<<<< HEAD
            Status:DataTypes.BOOLEAN
=======
            Status:DataTypes.BOOLEAN,
            TenantId:DataTypes.INTEGER,
            CompanyId:DataTypes.INTEGER
>>>>>>> master
=======
<<<<<<< HEAD
            Caller: DataTypes.STRING,
            //ConfigureId:DataTypes.INTEGER,
            Status:DataTypes.BOOLEAN,
            TenantId:DataTypes.INTEGER,
            CompanyId:DataTypes.INTEGER,
            StartDate:DataTypes.DATE,
            EndDate:DataTypes.DATE,
            ConfigureId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
=======
            ConfigureId:DataTypes.BOOLEAN,
            Status:DataTypes.BOOLEAN
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
>>>>>>> f22701c3c07b971a81951fd6e7efebd46bd4b7f0
        }
    );
    return CampConfigurations;
};

