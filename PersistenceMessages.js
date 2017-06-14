/**
 * Created by Pawan on 2/24/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var PersistenceMessages = sequelize.define('CSDB_PersistenceMessages', {
            From: DataTypes.STRING,
            To: DataTypes.STRING,
            Time: DataTypes.DATE,
            Callback :DataTypes.STRING(20000),
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER

        }
    );
    return PersistenceMessages;
};
