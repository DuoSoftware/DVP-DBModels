

module.exports = function(sequelize, DataTypes) {
    var LoadBalancer = sequelize.define('CSDB_LoadBalancer', {
            Type: DataTypes.STRING,
            MainIP: DataTypes.STRING,
            ID: DataTypes.INTEGER
        }
    );
    return LoadBalancer;
};

