
module.exports = function(sequelize, DataTypes) {
    var UserResource = sequelize.define('CSDB_UserResource', {
            Name: {type: DataTypes.STRING, allowNull: false, unique: true},
            Description: DataTypes.STRING,
            Active:DataTypes.BOOLEAN



        }
    );

    return UserResource;
};



