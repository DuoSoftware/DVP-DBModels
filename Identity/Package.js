module.exports = function(sequelize, DataTypes) {
    var Package = sequelize.define('Package', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.STRING, allowNull: false, unique: true},
            //type: {type: DataTypes.STRING, allowNull: false},
            navigation_type: {type: DataTypes.STRING, allowNull: false},
            price: {type: DataTypes.INTEGER, allowNull: false},
            setup_fee: {type: DataTypes.INTEGER, allowNull: false},
            billing_type: {type: DataTypes.STRING, allowNull: false},
            description: DataTypes.STRING
            ////////////has many tasks/////////////////

        }, {
            schema: "auth"
        }
    );

    return Package;
};
