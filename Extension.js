module.exports = function(sequelize, DataTypes) {
    var Extension = sequelize.define('CSDB_Extension', {
            Extension: {type: DataTypes.STRING, allowNull: false, unique: 'ext_company_unique'},
            ExtensionName: DataTypes.STRING,
            Enabled: {type: DataTypes.BOOLEAN, allowNull: false},
            ExtraData: DataTypes.STRING,
            ExtRefId: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'ext_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'ext_company_unique'},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: {type: DataTypes.STRING, allowNull: false}, //USER, GROUP, FAX
            DodNumber: DataTypes.STRING,
            DodActive: DataTypes.BOOLEAN,
            RecordingEnabled: DataTypes.BOOLEAN
        }
    );


    return Extension;
};