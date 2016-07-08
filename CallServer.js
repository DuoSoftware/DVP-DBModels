/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var callserver = sequelize.define('CSDB_CallServer', {
            Name: {type: DataTypes.STRING, allowNull: false},
            Activate: {type: DataTypes.BOOLEAN, allowNull: false},
            Code: {type: DataTypes.INTEGER, allowNull: false, unique: true},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            InternalMainIP: {type: DataTypes.STRING, allowNull: false}
        }
    );
    return callserver;
};
