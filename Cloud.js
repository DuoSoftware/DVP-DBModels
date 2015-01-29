/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var Cloud = sequelize.define('CSDB_Cluster', {
            Name: Sequelize.STRING,
            //ID: Sequelize.INTEGER,
            Activate: Sequelize.BOOLEAN,
            ID: Sequelize.INTEGER,
            Code: Sequelize.INTEGER,
            CompanyId: Sequelize.INTEGER,
            TenantId: Sequelize.INTEGER,
            CloudModel: Sequelize.INTEGER,
            Class: Sequelize.STRING,
            Type: Sequelize.STRING,
            Category: Sequelize.STRING,
            IsLoadBalanced: Sequelize.BOOLEAN,
            LoadBalancerID: Sequelize.INTEGER
        },{
            tableName: 'CSDB_Cluster', // this will define the table's name
            timestamps: false           // this will deactivate the timestamp columns
        }
    );


    return Context;
};


