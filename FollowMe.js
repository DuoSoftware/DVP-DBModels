module.exports = function(sequelize, DataTypes)
{
    var FollowMe = sequelize.define('CSDB_FollowMe',
        {
            DestinationNumber: {type:DataTypes.STRING, allowNull: false},
            RingTimeout: {type:DataTypes.INTEGER, allowNull: false},
            Priority: {type:DataTypes.INTEGER, allowNull: false},
            CompanyId: {type:DataTypes.INTEGER, allowNull: false},
            TenantId: {type:DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );

    return FollowMe;
};