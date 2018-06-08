module.exports = function(sequelize, DataTypes) {
    var Identity = sequelize.define('Identity', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            username: {type: DataTypes.STRING, allowNull: false, unique: true},
            password: {type: DataTypes.STRING, allowNull: false},
            active: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
            allow_invitation: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
        }, {
            schema: "auth"
        }
    );

    return Identity;
};
