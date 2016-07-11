

module.exports = function(sequelize, DataTypes) {
    var LoadBalancer = sequelize.define('CSDB_LoadBalancer', {
            Type: DataTypes.STRING,
            MainIP: {type: DataTypes.STRING, allowNull: false, unique: true}
        }
    );
    return LoadBalancer;
};

