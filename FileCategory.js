/**
 * Created by Pawan on 1/26/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var FileCategory = sequelize.define('CSDB_FileCategory', {
            Owner: {type:DataTypes.STRING,unique: 'catkeys'},
            Category:{type:DataTypes.STRING,unique: 'catkeys'}
        }
    );


    return FileCategory;
};
