module.exports = function(sequelize, DataTypes) {
    var Extension = sequelize.define('CSDB_Extension', {
            Extension: {type:DataTypes.STRING,unique: 'ExtensionUnique'},
            ExtensionName: DataTypes.STRING,
            Enabled: DataTypes.BOOLEAN,
            ExtraData: DataTypes.STRING,
            ExtRefId: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING, //USER, GROUP, FAX
            DodNumber: DataTypes.STRING,
            OtherData: DataTypes.STRING, //NEXTOPT, ETC
            DodActive: DataTypes.BOOLEAN,
            RecordingEnabled: DataTypes.BOOLEAN,
            AddUser: DataTypes.STRING,
            UpdateUser: DataTypes.STRING
        },{
            tableName: 'CSDB_Extensions'
        }
    );


    return Extension;
};
