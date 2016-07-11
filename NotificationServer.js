/**
 * Created by Pawan on 2/19/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var NotificationServer = sequelize.define('CSDB_NotificationServer', {
            UniqueID: {type: DataTypes.STRING, allowNull: false, unique: true},
            URL: DataTypes.STRING,
            CompanyId:{type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return NotificationServer;
};
