/**
 * Created by Heshan.i on 2/13/2017.
 */

module.exports = function(sequelize, DataTypes) {
    var CampDncInfo = sequelize.define('DB_CAMP_DncInfo', {
            ContactId:{type:DataTypes.STRING,unique: 'DncCompositeIndex'},
            TenantId:{type:DataTypes.INTEGER,unique: 'DncCompositeIndex'},
            CompanyId:{type:DataTypes.INTEGER,unique: 'DncCompositeIndex'},
            CamDncId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return CampDncInfo;
};