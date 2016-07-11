module.exports = function(sequelize, DataTypes) {
    var TrunkPhoneNumber = sequelize.define('CSDB_PhoneNumbers', {
            PhoneNumber: {type: DataTypes.STRING, allowNull: false, unique: true},
            ObjClass: DataTypes.STRING,
            ObjType: {type: DataTypes.STRING, allowNull: false}, //CALL, FAX
            ObjCategory: {type: DataTypes.STRING, allowNull: false}, //INBOUND, OUTBOUND, BOTH
            Enable: DataTypes.BOOLEAN,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            FaxType: DataTypes.STRING
        }
    );


    return TrunkPhoneNumber;
};