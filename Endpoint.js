/**
 * Created by Pawan on 8/10/2015.
 */
module.exports = function(sequelize, DataTypes)
{
    var Endpoint = sequelize.define('CSDB_Endpoint',
        {
            Phone:DataTypes.STRING,
            AreaCode:DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Availability:DataTypes.BOOLEAN
        }
    );

    return Endpoint;
};