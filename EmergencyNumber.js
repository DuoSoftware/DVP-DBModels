module.exports = function(sequelize, DataTypes)
{
    var EmergencyNumber = sequelize.define('CSDB_EmergencyNumber',
        {
            EmergencyNum: {type: DataTypes.STRING, allowNull: false, unique: 'emergency_company_unique'},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'emergency_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'emergency_company_unique'},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return EmergencyNumber;
};