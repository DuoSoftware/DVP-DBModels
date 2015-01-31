/**
 * Created by a on 1/29/2015.
 */


/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var Network = sequelize.define('CSDB_Network', {
            Type: DataTypes.STRING,
            Owner: DataTypes.INTEGER,
            Network: DataTypes.STRING,
            Mask: DataTypes.INTEGER
        }
    );


    return Network;
};



