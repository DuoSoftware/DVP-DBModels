module.exports = function(sequelize, DataTypes) {
    var Context = sequelize.define('CSDB_Context', {
            Context: {type:DataTypes.STRING, primaryKey:true},
            Description: DataTypes.STRING,
            ContextCat: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            AddUser: DataTypes.STRING,
            UpdateUser: DataTypes.STRING,
            AddTime: DataTypes.DATE,
            UpdateTime: DataTypes.DATE
        },{
            tableName: 'CSDB_Context', // this will define the table's name
            timestamps: false           // this will deactivate the timestamp columns
        }
    );


    return Context;
};