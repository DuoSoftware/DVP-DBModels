/**
 * Created by dinusha on 2/18/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var TrunkIpAddress = sequelize.define('CSDB_TrunkIpAddress', {
            IpAddress: DataTypes.STRING,
            Mask: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return TrunkIpAddress;
};
