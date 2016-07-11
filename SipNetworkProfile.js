module.exports = function(sequelize, DataTypes) {
    var SipNetworkProfile = sequelize.define('CSDB_SipNetworkProfile', {
            MainIp: DataTypes.STRING,
            ProfileName: DataTypes.STRING,
            InternalIp: {type: DataTypes.STRING,unique: "compositeIndex"},
            InternalRtpIp: DataTypes.STRING,
            ExternalIp: DataTypes.STRING,
            ExternalRtpIp: DataTypes.STRING,
            Port: {type: DataTypes.INTEGER,unique: "compositeIndex"},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return SipNetworkProfile;
};