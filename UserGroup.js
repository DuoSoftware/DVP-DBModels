module.exports = function(sequelize, DataTypes) {
    var UserGroup = sequelize.define('CSDB_UserGroup', {
            GroupName: {type: DataTypes.STRING, unique: ['comp_grp_unique']},
            ExtraData: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, unique: ['comp_grp_unique']},
            TenantId: {type: DataTypes.INTEGER, unique: ['comp_grp_unique']},
        }
    );


    return UserGroup;
};