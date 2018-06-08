module.exports = function(sequelize, DataTypes) {
    var ConsolePackageNavigation = sequelize.define('ConsolePackageNavigation', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        package_id: {type: DataTypes.INTEGER, unique: "console_navigation"},
        navigation_id: {type: DataTypes.INTEGER, unique: "console_navigation"},
        type: {type: DataTypes.STRING, unique: "console_navigation"}

    }, {
        schema: "auth"
    });
    return ConsolePackageNavigation;
};
