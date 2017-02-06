/**
 * Created by Heshan.i on 2/6/2017.
 */


module.exports = function (sequelize, DataTypes) {
    var ResResourceBreakTypes = sequelize.define('DB_RES_ResourceBreakTypes', {
            RecordId:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            TenantId:  {type:DataTypes.INTEGER, unique: 'BreakTypeIndex'},
            CompanyId: {type:DataTypes.INTEGER, unique: 'BreakTypeIndex'},
            BreakType: {type:DataTypes.STRING, unique: 'BreakTypeIndex'},
            Active: {type:DataTypes.STRING}
        }
    );


    return ResResourceBreakTypes;
};