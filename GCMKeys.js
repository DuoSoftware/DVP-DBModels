/**
 * Created by Pawan on 5/17/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var GCMKey = sequelize.define('CSDB_GCMKeys', {
            ClientID: {type : DataTypes.STRING,unique: "gcmcompositeIndex"},
            GCMKey: {type: DataTypes.STRING,unique: "gcmcompositeIndex"}

        }
    );


    return GCMKey;
};