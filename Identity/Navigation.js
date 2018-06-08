module.exports = function(sequelize, DataTypes) {
    var Navigation = sequelize.define('Navigation', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false, unique: true},
        status: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
        description: DataTypes.STRING

    }, {
        schema: "auth"
    });
    return Navigation;
};
