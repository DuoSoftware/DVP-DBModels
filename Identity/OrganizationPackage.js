module.exports = function(sequelize, DataTypes) {
    var OrganizationPackage = sequelize.define('OrganizationPackage', {

        package_id: {type: DataTypes.INTEGER, unique: "organization_package"},
        organization_id: {type: DataTypes.INTEGER, unique: "organization_package"},
        bought: {type: DataTypes.DATE}

    }, {
        schema: "auth"
    });
    return OrganizationPackage;
};
