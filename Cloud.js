/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var Cloud = sequelize.define('CSDB_Cluster', {
            Name: DataTypes.STRING,
            //ID: DataTypes.INTEGER,
            Activate: {type: DataTypes.BOOLEAN, allowNull: false},
            Code: {type: DataTypes.INTEGER, allowNull: false, unique: true},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            CloudModel: DataTypes.INTEGER,
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            LoadBalancerId: {type:DataTypes.INTEGER,unique: true}

        }
    );


    return Cloud;
};


