module.exports = function(sequelize, DataTypes) {
    var SipUACEndpoint = sequelize.define('CSDB_SipUACEndpoint', {
                SipUserUuid: DataTypes.STRING,
                SipUsername: DataTypes.STRING,
                Password: DataTypes.STRING,
                Enabled: DataTypes.BOOLEAN,
                ExtraData: DataTypes.STRING,
                EmailAddress: DataTypes.STRING,
                VoicemailAsEmail: DataTypes.BOOLEAN,
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
                UsePublic: DataTypes.BOOLEAN,
                TransInternalEnable: DataTypes.BOOLEAN,
                TransExternalEnable: DataTypes.BOOLEAN,
                TransConferenceEnable: DataTypes.BOOLEAN,
                TransGroupEnable: DataTypes.BOOLEAN,
                TransIVREnable: DataTypes.BOOLEAN,
                UpdateUser: DataTypes.STRING,
                DenyOutboundFor: DataTypes.STRING,
                RecordingEnabled: DataTypes.BOOLEAN

        }
    );


    return SipUACEndpoint;
};