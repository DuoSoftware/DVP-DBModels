module.exports = function(sequelize, DataTypes) {
    var ResourceScopes = sequelize.define('ResourceScope', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            resource: {type: DataTypes.STRING, unique: 'resource_scope'},
            scope: {type: DataTypes.STRING, unique: 'resource_scope'},
            action: {unique: 'resource_scope', type: DataTypes.ENUM, values: ['read', 'write', 'delete']}

        }, {
            schema: "auth"
        }
    );

    return ResourceScopes;
};
