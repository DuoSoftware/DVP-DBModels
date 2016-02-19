/**
 * Created by Pawan on 2/19/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var NotificationServer = sequelize.define('CSDB_Network', {
            UniqueID: DataTypes.STRING,
            URL: DataTypes.STRING,
            TenantId: DataTypes.INTEGER
        }
    );


    return NotificationServer;
};
