module.exports = function(sequelize, DataTypes) {
    var TrunkOperator = sequelize.define('CSDB_TrunkOperator', {
            OperatorName: DataTypes.STRING,
            OperatorCode: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ChannelFee: DataTypes.FLOAT,
            NumberSetupFee: DataTypes.FLOAT,
            NumberRSCRate: DataTypes.FLOAT
        }
    );


    return TrunkOperator;
};