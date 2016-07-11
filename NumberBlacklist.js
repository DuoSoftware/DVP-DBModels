/**
 * Created by dinusha on 2/26/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var NumberBlacklist = sequelize.define('CSDB_NumberBlacklist',
        {
            PhoneNumber: {type: DataTypes.STRING, allowNull: false, unique: 'numbl_company_unique'},
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'numbl_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'numbl_company_unique'}
        }
    );

    return NumberBlacklist;
};
