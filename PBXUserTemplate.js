module.exports = function(sequelize, DataTypes) {
    var PBXUserTemplate = sequelize.define('CSDB_PBXUserTemplate', {
            CallDivertNumber: DataTypes.STRING,
            CallDivertUser: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return PBXUserTemplate;
};