module.exports = function(sequelize, DataTypes) {
    var IdentityResourceScopeNavigationPermission = sequelize.define('IdentityResourceScopeNavigationPermission', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        resource_scope_nav_permission_id: {type: DataTypes.INTEGER, unique: "resource_scope_nav_permission"},
        identity_id: {type: DataTypes.INTEGER, unique: "resource_scope_nav_permission"}

    }, {
        schema: "auth"
    });
    return IdentityResourceScopeNavigationPermission;
};
