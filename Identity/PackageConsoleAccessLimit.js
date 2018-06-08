module.exports = function(sequelize, DataTypes) {
    var PackageConsoleAccessLimit = sequelize.define('PackageConsoleAccessLimit', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        package_id: {type: DataTypes.INTEGER, unique: "package_console_access_limit"},
        console_id: {type: DataTypes.INTEGER, unique: "package_console_access_limit"},
        access_limit: {type: DataTypes.INTEGER},
        access_type: {type: DataTypes.STRING},

    }, {
        schema: "auth"
    });
    return PackageConsoleAccessLimit;
};
