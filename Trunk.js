module.exports = function(sequelize, DataTypes) {
    var Trunk = sequelize.define('CSDB_Trunk', {
            TrunkCode: {type: DataTypes.STRING, allowNull: false, unique: true},
            TrunkName: {type: DataTypes.STRING, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            IpUrl: DataTypes.STRING,
            Enable: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return Trunk;
};