/**
 * Created by dinusha on 2/26/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var NumberBlacklist = sequelize.define('CSDB_NumberBlacklist',
        {
            PhoneNumber: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );

    return NumberBlacklist;
};
