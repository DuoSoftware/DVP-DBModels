module.exports = function(sequelize, DataTypes) {
    var SipUACEndpoint = sequelize.define('CSDB_SipUACEndpoint', {
                SipUserUuid: {type: DataTypes.STRING, allowNull: false, unique: true},
                SipUsername: {type: DataTypes.STRING, allowNull: false, unique: true},
                Password: DataTypes.STRING,
                Enabled: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
                ExtraData: DataTypes.STRING,
                EmailAddress: DataTypes.STRING,
                GuRefId: DataTypes.STRING,
                CompanyId: {type: DataTypes.INTEGER, allowNull: false},
                TenantId: {type: DataTypes.INTEGER, allowNull: false},
                ObjClass: DataTypes.STRING,
                ObjType: DataTypes.STRING,
                ObjCategory: DataTypes.STRING,
                SipExtension: DataTypes.STRING,
                Pin: DataTypes.STRING,
                PinGenTime: DataTypes.DATE,
                TryCount: DataTypes.INTEGER,
                UsePublic: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
                TransInternalEnable: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
                TransExternalEnable: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
                TransConferenceEnable: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
                TransGroupEnable: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}

        }
    );


    return SipUACEndpoint;
};