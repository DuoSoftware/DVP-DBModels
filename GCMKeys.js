/**
 * Created by Pawan on 5/17/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var GCMKey = sequelize.define('CSDB_GCMKeys', {
            ClientID: {type : DataTypes.INTEGER,unique: "compositeIndex"},
            GCMKey: {type: DataTypes.STRING,unique: "compositeIndex"}

        }
    );


    return GCMKey;
};