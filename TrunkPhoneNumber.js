module.exports = function(sequelize, DataTypes) {
    var TrunkPhoneNumber = sequelize.define('CSDB_PhoneNumbers', {
            PhoneNumber: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Enable: DataTypes.BOOLEAN,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return TrunkPhoneNumber;
};