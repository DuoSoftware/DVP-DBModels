module.exports = function(sequelize, DataTypes) {
    var Context = sequelize.define('CSDB_Context', {
            Context: {type:DataTypes.STRING, primaryKey:true},
            Description: DataTypes.STRING,
            ContextCat: {type: DataTypes.STRING, allowNull: false},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );


    return Context;
};