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
    'IPAddress'
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
    m.Trunk.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumbers", foreignKey: "TrunkId"});
    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfo", foreignKey: "LimitId"});
    m.UserGroup.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.UserGroup.belongsToMany(m.SipUACEndpoint, {through: 'CSDB_UsrGrpJunction'});
    m.SipUACEndpoint.belongsToMany(m.UserGroup, {through: 'CSDB_UsrGrpJunction'});
    m.Schedule.hasMany(m.Appointment, {as:"Appointment", foreignKey: "ScheduleId"});
    m.CallServer.hasMany(m.SipNetworkProfile, {as: "SipNetworkProfile", foreignKey: "CallServerId"});
    m.SipUACEndpoint.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.SipNetworkProfile.hasMany(m.Trunk, {as:"Trunk", foreignKey:"TrunkId"});
    m.Context.hasMany(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey:"Context"});
    m.Cloud.hasMany(m.Trunk, {as: "Trunk", foreignKey: "ClusterId"});
    m.Cloud.belongsTo(m.LoadBalancer,{as: "LoadBalancer", foreignKey: "LoadBalancerId"});
    m.CloudEndUser.hasMany(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: "CloudEndUserId"});
    m.Cloud.hasMany(m.CallServer, {as: "CallServer", foreignKey: "ClusterId"});
    m.Cloud.hasMany(m.Network, {as: "Network", foreignKey: "ClusterId"});
    m.Cloud.hasMany(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "ClusterId"});
    m.Cloud.belongsTo(m.Cloud, {as: "ParentCloud"});
    m.CloudEndUser.belongsTo(m.Network, {as: "Network", foreignKey: "NetworkId"});
    //m.CloudEndUser.belongsToMany(m.SipNetworkProfile, {as:"SipNetworkProfiles"});
    m.CloudEndUser.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfile", foreignKey:"SipNetworkProfileId"});
    m.IPAddress.belongsTo(m.CallServer, {as: "CallServer", foreignKey: "CallServerId"});
    m.Schedule.hasMany(m.CallRule, {as: "CallRule", foreignKey: "ScheduleId"});
    m.Translation.hasMany(m.CallRule, {as: "CallRule", foreignKey: "TranslationId"});



})(module.exports);


module.exports.SequelizeConn = sequelize;