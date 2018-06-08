module.exports = function(sequelize, DataTypes) {
    var ResourceScopeNavigationPermission = sequelize.define('ResourceScopeNavigationPermission', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        navigation_id: {type: DataTypes.INTEGER, unique: "res_navigation_scope"},
        scope_resource_id: {type: DataTypes.INTEGER, unique: "res_navigation_scope"},

    }, {
        schema: "auth"
    });
    return ResourceScopeNavigationPermission;
};
