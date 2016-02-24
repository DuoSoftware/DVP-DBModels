/**
 * Created by Pawan on 2/24/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var PersistenceMessages = sequelize.define('CSDB_PersistenceMessages', {
            From: DataTypes.INTEGER,
            To: DataTypes.INTEGER,
            Time: DataTypes.DATE,
            Callback :DataTypes.STRING

        }
    );
    return PersistenceMessages;
};
