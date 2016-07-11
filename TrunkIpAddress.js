/**
 * Created by dinusha on 2/18/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var TrunkIpAddress = sequelize.define('CSDB_TrunkIpAddress', {
            IpAddress: DataTypes.STRING,
            Mask: DataTypes.INTEGER,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return TrunkIpAddress;
};
