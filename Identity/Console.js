module.exports = function(sequelize, DataTypes) {
    var Console = sequelize.define('Console', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.STRING, allowNull: false, unique: true},
            description: DataTypes.STRING
        }, {
            schema: "auth"
        }
    );

    return Console;
};





