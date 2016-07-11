module.exports = function(sequelize, DataTypes) {
    var Translation = sequelize.define('CSDB_Translation', {
            TransName: {type: DataTypes.STRING, allowNull: false, unique: 'trans_company_unique'},
            TransDescription: DataTypes.STRING,
            Enabled: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
            LAdd: DataTypes.STRING,
            LRemove: DataTypes.INTEGER,
            RAdd: DataTypes.STRING,
            RRemove: DataTypes.INTEGER,
            Replace: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'trans_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'trans_company_unique'},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );


    return Translation;
};