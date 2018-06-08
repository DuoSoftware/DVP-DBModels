module.exports = function(sequelize, DataTypes) {
    var PackageUnit = sequelize.define('PackageUnit', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.STRING, allowNull: false, unique: true},
            type: {type: DataTypes.STRING, allowNull: false},
            unit: {type: DataTypes.STRING, allowNull: false},
            limit: {type: DataTypes.INTEGER, allowNull: false},
            price: {type: DataTypes.INTEGER, allowNull: false},
            setup_fee: {type: DataTypes.INTEGER, allowNull: false},
            billing_type: {type: DataTypes.STRING, allowNull: false},
            description: DataTypes.STRING

        }, {
            schema: "auth"
        }
    );

    return PackageUnit;
};
