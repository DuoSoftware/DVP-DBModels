module.exports = function(sequelize, DataTypes) {
    var UserRoles = sequelize.define('UserRoles', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.STRING, allowNull: false, unique: true},
            description: DataTypes.STRING
        }, {
            schema: "auth"
        }
    );

    return UserRoles;
};
