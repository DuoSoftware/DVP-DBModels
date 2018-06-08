var Sequelize = require('sequelize');
var Config = require('config');

var dbType = Config.DB.Type;
var database = Config.DB.Database;
var dbuser = Config.DB.User;
var dbpassword = Config.DB.Password;
var dbport = Config.DB.Port;
var dbhost = Config.DB.Host;
var cluster = Config.DB.Cluster;
var dialectOptions = Config.DB.dialectOptions;

var options = {
    dialect: dbType, // or 'sqlite', 'postgres', 'mariadb'
    port: dbport, // or 5432 (for postgres)
    host: dbhost //host address
};


if (cluster && (cluster === "true" || cluster === true)) {

    options.pool = {
        max: 5,
        min: 0,
        idle: 10000
    };
}

if (dialectOptions) {
    options.dialectOptions = dialectOptions;
}
;


var sequelize = new Sequelize(database, dbuser, dbpassword, options);

var authmodels = [
    'Console',
    'Navigation',
    'UserRoles',
    'Tenant',
    'ConsolePackageNavigation',
    'Identity',
    'IdentityAccount',
    'Organization',
    'OrganizationPackage',
    'OrganizationPackageUnit',
    'Package',
    'PackageConsoleAccessLimit',
    'PackageUnit',
    'PackageUserRoleCreateLimit',
    'ResourceScopeNavigationPermission',
    'IdentityResourceScopeNavigationPermission',
    'ResourceScopes',
    'UserRoles'
]


authmodels.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function (m) {

    /////////////////////////////////////////////////////////Auth module/////////////////////////////////////////////////////////
    // 'Console',
    //     'ConsoleNavigation',
    //     'UserRoles',
    //     'Tenant',
    //     'ConsolePackageNavigation',
    //     'Identity',
    //     'IdentityAccount',
    //     'Organization',
    //     'OrganizationPackage',
    //     'OrganizationPackageUnit',
    //     'Package',
    //     'PackageConsoleAccessLimit',
    //     'PackageUnit',
    //     'PackageUserRoleCreateLimit',
    //     'ResourceScopeNavigationScope',
    //     'ResourceScopes',
    //     'UserRoles'


    ///////////////////////////////////console/////////////////////////////////////
    m.Console.belongsToMany(m.UserRoles, {
        through: "ConsoleUserRole",
        foreignKey: 'role_id',
    });
    m.UserRoles.belongsToMany(m.Console, {
        through: "ConsoleUserRole",
        foreignKey: 'console_id',
    });

    m.Console.belongsToMany(m.Navigation, {
        through: "ConsoleNavigation",
        foreignKey: 'navigation_id'
    });
    m.Navigation.belongsToMany(m.Console, {
        through: "ConsoleNavigation",
        foreignKey: 'console_id'
    });

    /////////////////////////////////////Navigation////////////////////////////////////


    m.Navigation.belongsToMany(m.ResourceScopes, {

        foreignKey: 'navigation_id',
        through: {
            model: m.ResourceScopeNavigationPermission,
            unique: false
        }
    });


    m.ResourceScopes.belongsToMany(m.Navigation, {

        foreignKey: 'scope_resource_id',
        through: {
            model: m.ResourceScopeNavigationPermission,
            unique: false
        }
    });

    /////////////////////////////////////////////identity identityAccount/////////////////////////////////////////////

    m.Identity.belongsToMany(m.Organization, {

        foreignKey: 'identity_id',
        through: {
        model: m.IdentityAccount,
            unique: false,

    }});
    m.Organization.belongsToMany(m.Identity, {

        foreignKey: 'company_id',
        through: {
            model: m.IdentityAccount,
            unique: false
        }});



    //////////////////////////////////////package///////////////////////////////////////////////////////////////////

    m.Package.belongsToMany(m.Console, {

        foreignKey: 'package_id',
        through: {
            model: m.PackageConsoleAccessLimit,
            unique: false
        }});

    m.Console.belongsToMany(m.Package, {

        foreignKey: 'console_id',
        through: {
            model: m.PackageConsoleAccessLimit,
            unique: false
        }});



    m.Package.belongsToMany(m.UserRoles, {

        foreignKey: 'package_id',
        through: {
            model: m.PackageUserRoleCreateLimit,
            unique: false
        }});

    m.UserRoles.belongsToMany(m.Package, {

        foreignKey: 'user_role_id',
        through: {
            model: m.PackageUserRoleCreateLimit,
            unique: false
        }});


    //////////////////////////////////////////////////////////////organization/////////////////////////////////////////

    m.Organization.belongsTo(m.Tenant,{as: "tenant"});
    //m.Tenant.hasMany(m.Organization);

     m.Organization.belongsTo(m.Identity, {as: "owner"});
     //m.Identity.hasMany(m.Organization);



    m.Organization.belongsToMany(m.Package, {

        foreignKey: 'organization_id',
        through: {
            model: m.OrganizationPackage,
            unique: false
        }});

    m.Package.belongsToMany(m.Organization, {

        foreignKey: 'package_id',
        through: {
            model: m.OrganizationPackage,
            unique: false
        }});



    m.Organization.belongsToMany(m.PackageUnit, {

        foreignKey: 'organization_id',
        through: {
            model: m.OrganizationPackageUnit,
            unique: false
        }});

    m.PackageUnit.belongsToMany(m.Organization, {

        foreignKey: 'package_unit_id',
        through: {
            model: m.OrganizationPackageUnit,
            unique: false
        }});




    m.IdentityAccount.belongsToMany(m.ResourceScopeNavigationPermission, {

        foreignKey: 'identity_id',
        through: {
            model: m.IdentityResourceScopeNavigationPermission,
            unique: false,

        }});

    m.ResourceScopeNavigationPermission.belongsToMany(m.IdentityAccount, {

        foreignKey: 'resource_scope_nav_permission_id',
        through: {

            model: m.IdentityResourceScopeNavigationPermission,
            unique: false,

        }});


})(module.exports);


module.exports.SequelizeConn = sequelize;

