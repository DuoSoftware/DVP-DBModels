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
    'CallServer'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'\\'+ model);
});


(function(m) {
    m.LoadBalancer.belongsTo(m.Cloud);
    m.CallServer.belongsTo(m.Cloud);
    m.Network.belongsTo(m.Cloud);
    m.CloudEndUser.belongsTo(m.Cloud);
    m.Network.belongsTo(m.CloudEndUser);
    m.Cloud.hasOne(m.LoadBalancer);
    m.Cloud.hasMany(m.CallServer, {as: "CallServers"});
    m.Cloud.hasMany(m.Network, {as: "Networks"});
})(module.exports);


module.exports.SequelizeConn = sequelize;