module.exports = function(sequelize, DataTypes)
{
    var DidNumber = sequelize.define('CSDB_DidNumber',
        {
            DidNumber: {type: DataTypes.STRING, allowNull: false, unique: true},
            DidActive: {type: DataTypes.BOOLEAN, allowNull: false},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return DidNumber;
};