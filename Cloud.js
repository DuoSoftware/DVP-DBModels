/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var Cloud = sequelize.define('CSDB_Cluster', {
            Name: DataTypes.STRING,
            //ID: DataTypes.INTEGER,
            Activate: DataTypes.BOOLEAN,
            ID: DataTypes.INTEGER,
            Code: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            CloudModel: DataTypes.INTEGER,
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            IsLoadBalanced: DataTypes.BOOLEAN,
            LoadBalancerID: DataTypes.INTEGER
        },{
            tableName: 'CSDB_Clusters', // this will define the table's name
            timestamps: false           // this will deactivate the timestamp columns
        }
    );


    return Cloud;
};


