/**
 * Created by Pawan on 8/10/2015.
 */
module.exports = function(sequelize, DataTypes)
{
    var Endpoints = sequelize.define('CSDB_Endpoints',
        {
            Phone:DataTypes.STRING,
            Protocol: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Availability:DataTypes.BOOLEAN
        }
    );

    return Endpoints;
};