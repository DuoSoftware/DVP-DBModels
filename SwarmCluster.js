/**
 * Created by a on 9/14/2015.
 */
module.exports = function(sequelize, DataTypes) {
    var SwarmCluster = sequelize.define('CSDB_SwarmCluster', {
            Name: DataTypes.STRING,
            Token: {type : DataTypes.STRING, unique: true},
            Code: DataTypes.INTEGER,
            Company: DataTypes.INTEGER,
            Tenant: DataTypes.INTEGER,
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            LBDomain: DataTypes.STRING
        }
    );
    return SwarmCluster;
};
