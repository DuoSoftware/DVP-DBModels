module.exports = function(sequelize, DataTypes) {
    var Conference = sequelize.define('CSDB_Conference', {
            ConferenceName: {type:DataTypes.STRING, primaryKey:true},
            Description: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Pin:DataTypes.STRING,
            AllowAnonymousUser:{type: DataTypes.BOOLEAN, allowNull: false},
            StartTime:{type: DataTypes.DATE, allowNull: false},
            EndTime:{type: DataTypes.DATE, allowNull: false},
            IsLocked:{type: DataTypes.BOOLEAN, allowNull: false},
            MaxUser:{type: DataTypes.INTEGER, allowNull: false},
            CurrentUsers: DataTypes.INTEGER

        }
    );


    return Conference;
};