/**
 * Created by dinusha on 11/23/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var ReportMailRecipients = sequelize.define('CSDB_ReportMailRecipients', {
            ReportType: DataTypes.STRING,
            Recipient: DataTypes.STRING,
            TimeZone: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return ReportMailRecipients;
};
