module.exports = function(sequelize, DataTypes) {
    var Gateway = sequelize.define('CSDB_Gateway', {
            GatewayCode: DataTypes.STRING,
            GatewayName: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            IpUrl: DataTypes.STRING,
            Enable: DataTypes.BOOLEAN,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            Operator: DataTypes.STRING
        }
    );


    return Gateway;
};