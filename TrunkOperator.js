module.exports = function(sequelize, DataTypes) {
    var TrunkOperator = sequelize.define('CSDB_TrunkOperator', {
            OperatorName: DataTypes.STRING,
            OperatorCode: {type: DataTypes.STRING, allowNull: false, unique: true},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return TrunkOperator;
};