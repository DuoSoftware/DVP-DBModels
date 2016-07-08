module.exports = function(sequelize, DataTypes)
{
    var FeatureCode = sequelize.define('CSDB_FeatureCode',
        {
            PickUp: DataTypes.STRING,
            Intercept: DataTypes.STRING,
            Park: DataTypes.STRING,
            VoiceMail: DataTypes.STRING,
            Barge: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'fc_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'fc_company_unique'},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return FeatureCode;
};