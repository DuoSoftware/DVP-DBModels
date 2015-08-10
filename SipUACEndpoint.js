module.exports = function(sequelize, DataTypes) {
    var SipUACEndpoint = sequelize.define('CSDB_SipUACEndpoint', {
                SipUserUuid: DataTypes.STRING,
                SipUsername: DataTypes.STRING,
                Password: DataTypes.STRING,
                Enabled: DataTypes.BOOLEAN,
                ExtraData: DataTypes.STRING,
                EmailAddress: DataTypes.STRING,
                GuRefId: DataTypes.STRING,
                CompanyId: DataTypes.INTEGER,
                TenantId: DataTypes.INTEGER,
                ObjClass: DataTypes.STRING,
                ObjType: DataTypes.STRING,
                ObjCategory: DataTypes.STRING,
                SipExtension: DataTypes.STRING,
                AddUser: DataTypes.STRING,
                Pin: DataTypes.STRING,
                PinGenTime: DataTypes.DATE,
                TryCount: DataTypes.INTEGER,
                TransInternalFC: DataTypes.INTEGER,
                TransExternalFC: DataTypes.INTEGER,
                TransConferenceFC: DataTypes.INTEGER,
                TransGroupFC: DataTypes.INTEGER,
                UpdateUser: DataTypes.STRING

        }
    );


    return SipUACEndpoint;
};