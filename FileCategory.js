/**
 * Created by Pawan on 1/26/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var FileCategory = sequelize.define('CSDB_FileCategory', {
            Owner: DataTypes.STRING,
            Category: DataTypes.STRING
        }
    );


    return FileCategory;
};
