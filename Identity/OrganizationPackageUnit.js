module.exports = function(sequelize, DataTypes) {
    var OrganizationPackageUnit = sequelize.define('OrganizationPackageUnit', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        package_unit_id: {type: DataTypes.INTEGER, unique: "organization_package_unit"},
        organization_id: {type: DataTypes.INTEGER, unique: "organization_package_unit"},
        bought: {type: DataTypes.DATE},
        units: {type: DataTypes.INTEGER, allowNull: false}

    }, {
        schema: "auth"
    });
    return OrganizationPackageUnit;
};
