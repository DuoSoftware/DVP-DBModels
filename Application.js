module.exports = function(sequelize, DataTypes) {
    var Application = sequelize.define('CSDB_Application', {
            AppName: {type: DataTypes.STRING, allowNull: false},
            Description: DataTypes.STRING,
            Url: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            Availability:DataTypes.BOOLEAN,
            OtherData:DataTypes.STRING
        }
    );


    return Application;
};