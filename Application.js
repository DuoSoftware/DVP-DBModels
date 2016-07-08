module.exports = function(sequelize, DataTypes) {
    var Application = sequelize.define('CSDB_Application', {
            AppName: {type: DataTypes.STRING, allowNull: false},
            Description: DataTypes.STRING,
            Url: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            Availability:DataTypes.BOOLEAN,
            OtherData:DataTypes.STRING
        }
    );


    return Application;
};