/**
 * Created by dinusha on 5/2/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var CacheUpdates = sequelize.define('CSDB_CacheUpdates', {
            ResourceType: DataTypes.STRING,
            ResourceUniqueId: DataTypes.STRING,
            CacheUpdateStatus: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );

    return CacheUpdates;
};