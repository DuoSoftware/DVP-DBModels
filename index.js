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
    module.exports[model] = sequelize.import(__dirname +'\\'+ model);
});


(function(m) {
    //m.LoadBalancer.belongsTo(m.Cloud);
    //m.CallServer.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.Cloud);
    //m.CloudEndUser.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.CloudEndUser);
    m.TrunkPhoneNumber.belongsTo(m.Schedule, {as:"Schedule"});
    m.Trunk.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumbers"});
    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfo"});
    m.UserGroup.belongsTo(m.Extension, {as:"Extension"});
    m.UserGroup.belongsToMany(m.SipUACEndpoint, {through: 'CSDB_UsrGrpJunction'});
    m.SipUACEndpoint.belongsToMany(m.UserGroup, {through: 'CSDB_UsrGrpJunction'});
    m.Schedule.hasMany(m.Appointment, {as:"Appointments"});
    m.CallServer.hasMany(m.SipNetworkProfile, {as:"SipNetworkProfiles"});
    m.SipUACEndpoint.belongsTo(m.Extension, {as:"Extension"});
    m.Context.hasMany(m.SipUACEndpoint, {as:"SipUACEndpoints"});
    m.Cloud.hasMany(m.Trunk, {as: "Trunks"});
    m.Cloud.belongsTo(m.LoadBalancer,{as: "LoadBalancer"});
    m.CloudEndUser.hasMany(m.SipUACEndpoint, {as: "SipUACEndpoints"});
    m.Cloud.hasMany(m.CallServer, {as: "CallServers"});
    m.Cloud.hasMany(m.Network, {as: "Networks"});
    m.Cloud.hasMany(m.CloudEndUser, {as: "CloudEndUser"});
    m.Cloud.belongsTo(m.Cloud, {as: "ParentCloud"});
    m.CloudEndUser.belongsTo(m.Network, {as: "Networks"});
    //m.CloudEndUser.belongsToMany(m.SipNetworkProfile, {as:"SipNetworkProfiles"});
    m.CloudEndUser.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfiles"});
    m.IPAddress.belongsTo(m.CallServer, {as: "CallServer"})



})(module.exports);


module.exports.SequelizeConn = sequelize;