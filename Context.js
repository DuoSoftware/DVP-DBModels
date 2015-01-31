module.exports = function(sequelize, DataTypes) {
    var Context = sequelize.define('CSDB_Context', {
            Context: DataTypes.STRING(100),
            Description: DataTypes.STRING(1000),
            ContextCat: DataTypes.STRING(),
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            AddUser: DataTypes.STRING,
            UpdateUser: DataTypes.STRING,
            AddDate: DataTypes.DATE,
            UpdateDate: DataTypes.DATE
        },{
            tableName: 'CSDB_Context', // this will define the table's name
            timestamps: false           // this will deactivate the timestamp columns
        }
    );


    return Context;
};