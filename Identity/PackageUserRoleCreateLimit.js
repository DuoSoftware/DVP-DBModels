module.exports = function(sequelize, DataTypes) {
    var PackageUserRoleCreateLimit = sequelize.define('PackageUserRoleCreateLimit', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        package_id: {type: DataTypes.INTEGER, unique: "package_user_role_limit"},
        user_role_id: {type: DataTypes.INTEGER, unique: "package_user_role_limit"},
        access_limit: {type: DataTypes.INTEGER}

    }, {
        schema: "auth"
    });
    return PackageUserRoleCreateLimit;
};
