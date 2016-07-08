/**
 * Created by pawan on 4/8/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var AppDeveloper = sequelize.define('CSDB_AppDeveloper', {
            Username: {type: DataTypes.STRING, allowNull: false, unique: true},
            Password: {type: DataTypes.STRING, allowNull: false},
            Email:{type: DataTypes.STRING, allowNull: false, unique: true},
            Phone:DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            RegDate: DataTypes.STRING,
            RefId:DataTypes.INTEGER,
            Availability:DataTypes.BOOLEAN



        }
    );


    return AppDeveloper;
};
