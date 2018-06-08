module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define('Organization', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.INTEGER, allowNull: false},
            enable: {type: DataTypes.BOOLEAN, allowNull: false, default: false}
        }, {
            schema: "auth"
        }
    );

    return Organization;
};
