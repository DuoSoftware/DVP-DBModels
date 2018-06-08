module.exports = function(sequelize, DataTypes) {
    var Tenant = sequelize.define('Tenant', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            root: {type: DataTypes.STRING, allowNull: false}
        }, {
            schema: "auth"
        }
    );

    return Tenant;
};
