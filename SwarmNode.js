
module.exports = function(sequelize, DataTypes) {
    var SwarmNode = sequelize.define('CSDB_SwarmNode', {
            Name: DataTypes.STRING,
            Status: DataTypes.BOOLEAN,
            Code: DataTypes.INTEGER,
            Company: DataTypes.INTEGER,
            Tenant: DataTypes.INTEGER,
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            MainIP: DataTypes.STRING,
            Domain: DataTypes.STRING,
            HostDomain: DataTypes.STRING
        }
    );
    return SwarmNode;
};