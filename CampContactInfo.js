/**
 * Created by Rajinda on 6/29/2015.
 */


module.exports = function(sequelize, DataTypes) {
    var CampContactInfo = sequelize.define('DB_CAMP_ContactInfo', {
<<<<<<< HEAD
<<<<<<< HEAD
            CampaignId: DataTypes.INTEGER,
            CamScheduleId: DataTypes.INTEGER,
=======
>>>>>>> master
=======
            ContactId:{type:DataTypes.STRING,unique: 'ContactCompositeIndex'},
            CategoryID:{type:DataTypes.INTEGER,unique: 'ContactCompositeIndex'},
            Status:DataTypes.BOOLEAN,
            TenantId:{type:DataTypes.INTEGER,unique: 'ContactCompositeIndex'},
            CompanyId:{type:DataTypes.INTEGER,unique: 'ContactCompositeIndex'},
            CamContactId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
=======
            CampaignId: DataTypes.INTEGER,
            CamScheduleId: DataTypes.INTEGER,
>>>>>>> f22701c3c07b971a81951fd6e7efebd46bd4b7f0
            ContactId:DataTypes.STRING,
            CamContactId:DataTypes.STRING,
            Status:DataTypes.BOOLEAN,
            TenantId:DataTypes.INTEGER,
            CompanyId:DataTypes.INTEGER
>>>>>>> 1a3f0fd2e03012fc947fcc52bd6962245927e56e
        }
    );
    return CampContactInfo;
};

