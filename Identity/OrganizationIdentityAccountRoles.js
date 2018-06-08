module.exports = function(sequelize, DataTypes) {
    var OrganizationIdentityAccountRoles = sequelize.define('OrganizationIdentityAccountRoles', {

        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        id_account_name: {type: DataTypes.STRING, unique: "organization_ide_acc_role"},
        organization_id: {type: DataTypes.INTEGER, unique: "organization_ide_acc_role"},
        role: {type: DataTypes.INTEGER, unique: "organization_ide_acc_role"}

    }, {
        schema: "auth"
    });
    return OrganizationIdentityAccountRoles;
};
