module.exports = function(sequelize, DataTypes) {
    var IPAddress = sequelize.define('CSDB_IPAddress', {
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            MainIp: DataTypes.STRING,
            IP: {type: DataTypes.STRING, unique: true},
            IsAllocated: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
        }
    );


    return IPAddress;
};