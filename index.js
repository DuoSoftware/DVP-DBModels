var Sequelize = require('sequelize');
var Config = require('config');

var dbType = Config.DB.Type;
var database = Config.DB.Database;
var dbuser = Config.DB.User;
var dbpassword = Config.DB.Password;
var dbport = Config.DB.Port;
var dbhost = Config.DB.Host;

var sequelize = new Sequelize(database, dbuser, dbpassword, {
    dialect:dbType, // or 'sqlite', 'postgres', 'mariadb'
    port:dbport, // or 5432 (for postgres)
    host:dbhost //host address
});

var models = [
    'Context',
    'Cloud',
    'CloudEndUser',
    'LoadBalancer',
    'Network',
    'CallServer',
    'Extension',
    'Trunk',
    'SipUACEndpoint',
    'SipNetworkProfile',
    'Schedule',
    'Appointment',
    'UserGroup',
    'TrunkPhoneNumber',
    'LimitInfo',
    'FileUpload',
    'FileDownload',
    'Translation',
    'CallRule',
    'IPAddress',
    'Application',
    'TrunkOperator',
    'AppDeveloper'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'/'+ model);
});


(function(m) {
    //m.LoadBalancer.belongsTo(m.Cloud);
    //m.CallServer.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.Cloud);
    //m.CloudEndUser.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.CloudEndUser);
    m.TrunkPhoneNumber.belongsTo(m.Schedule, {as:"Schedule", foreignKey:"ScheduleId"});
    m.Schedule.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumber", foreignKey:"ScheduleId"});

    m.Trunk.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumbers", foreignKey: "TrunkId"});
    m.TrunkPhoneNumber.belongsTo(m.Trunk, {as:"Trunk", foreignKey: "TrunkId"});

    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfo", foreignKey: "LimitId"});
    m.LimitInfo.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumber", foreignKey: "LimitId"});

    m.UserGroup.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.Extension.hasOne(m.UserGroup, {as:"UserGroup", foreignKey: "ExtensionId"});

    m.UserGroup.belongsToMany(m.SipUACEndpoint, {as: "SipUACEndpoint", through: 'CSDB_UsrGrpJunction'});
    m.SipUACEndpoint.belongsToMany(m.UserGroup, {as: "UserGroup", through: 'CSDB_UsrGrpJunction'});

    m.Schedule.hasMany(m.Appointment, {as:"Appointment", foreignKey: "ScheduleId"});
    m.Appointment.belongsTo(m.Schedule, {as:"Schedule", foreignKey: "ScheduleId"});

    m.CallServer.hasMany(m.SipNetworkProfile, {as: "SipNetworkProfile", foreignKey: "CallServerId"});
    m.SipNetworkProfile.belongsTo(m.CallServer, {as: "CallServer", foreignKey: "CallServerId"});

    m.SipUACEndpoint.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.Extension.hasOne(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey: "ExtensionId"});

    m.Trunk.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfile", foreignKey:"ProfileId"});
    m.SipNetworkProfile.hasMany(m.Trunk, {as:"Trunk", foreignKey:"ProfileId"});

    m.Context.hasMany(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey:"ContextId"});
    m.SipUACEndpoint.belongsTo(m.Context, {as:"Context", foreignKey:"ContextId"});

    m.Trunk.belongsTo(m.LoadBalancer, {as: "LoadBalancer", foreignKey: "LoadBalancerId"});
    m.LoadBalancer.hasMany(m.Trunk, {as: "Trunk", foreignKey: "LoadBalancerId"});

    m.Cloud.belongsTo(m.LoadBalancer,{as: "LoadBalancer", foreignKey: "LoadBalancerId"});
    m.LoadBalancer.hasOne(m.Cloud,{as: "Cloud", foreignKey: "LoadBalancerId"});

    m.CloudEndUser.hasMany(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: "CloudEndUserId"});
    m.SipUACEndpoint.belongsTo(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "CloudEndUserId"});

    m.Cloud.hasMany(m.CallServer, {as: "CallServer", foreignKey: "ClusterId"});
    m.CallServer.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.hasMany(m.Network, {as: "Network", foreignKey: "ClusterId"});
    m.Network.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.hasMany(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "ClusterId"});
    m.CloudEndUser.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.belongsTo(m.Cloud, {as: "ParentCloud"});

    m.CloudEndUser.belongsTo(m.Network, {as: "Network", foreignKey: "NetworkId"});
    m.Network.hasOne(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "NetworkId"});

    m.CloudEndUser.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfile", foreignKey:"SipNetworkProfileId"});
    m.SipNetworkProfile.hasOne(m.CloudEndUser, {as:"CloudEndUser", foreignKey:"SipNetworkProfileId"});

    m.IPAddress.belongsTo(m.CallServer, {as: "CallServer", foreignKey: "CallServerId"});
    m.CallServer.hasMany(m.IPAddress, {as: "IPAddress", foreignKey: "CallServerId"});

    m.Schedule.hasMany(m.CallRule, {as: "CallRule", foreignKey: "ScheduleId"});
    m.CallRule.belongsTo(m.Schedule, {as: "Schedule", foreignKey: "ScheduleId"});

    m.Translation.hasMany(m.CallRule, {as: "CallRule", foreignKey: "TranslationId"});
    m.CallRule.belongsTo(m.Translation, {as: "Translation", foreignKey: "TranslationId"});

    m.CallRule.belongsTo(m.Application, {as: "Application", foreignKey: "AppId"});
    m.Application.hasMany(m.CallRule, {as:"CallRule", foreignKey: "AppId"});

    m.CallRule.belongsTo(m.TrunkPhoneNumber, {as: "TrunkPhoneNumber", foreignKey: "PhoneNumId"});
    m.TrunkPhoneNumber.hasMany(m.CallRule, {as:"CallRule", foreignKey: "PhoneNumId"});

    m.Trunk.belongsTo(m.Translation, {as: "Translation", foreignKey: "TranslationId"});
    m.Translation.hasMany(m.Trunk, {as: "Trunk", foreignKey: "TranslationId"});

    m.Trunk.belongsTo(m.TrunkOperator, {as: "TrunkOperator", foreignKey: "TrunkOperatorId"});
    m.TrunkOperator.hasMany(m.Trunk, {as: "Trunk", foreignKey: "TrunkOperatorId"});

    m.Application.belongsTo(m.AppDeveloper,{as: "AppDeveloper",foreignKey:"AppDeveloperId"});
    m.AppDeveloper.hasMany(m.Application,{as:"Application",foreignKey:"AppDeveloperId"});

})(module.exports);


module.exports.SequelizeConn = sequelize;