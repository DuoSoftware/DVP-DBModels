module.exports = function(sequelize, DataTypes) {
    var IPAddress = sequelize.define('CSDB_IPAddress', {
            CompanyId: { type: DataTypes.INTEGER, allowNull: false},
            TenantId: { type: DataTypes.INTEGER, allowNull: false},
            MainIp: DataTypes.STRING,
            IP: {type: DataTypes.STRING, unique: true},
            IsAllocated: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
        }
    );


    return IPAddress;
};