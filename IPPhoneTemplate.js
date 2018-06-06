module.exports = function(sequelize, DataTypes) {
    var IPPhoneTemplate = sequelize.define('CSDB_IPPhoneTemplate', {

            model: {type: DataTypes.STRING, primaryKey: true},
            template: DataTypes.TEXT,
            make: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );

    return IPPhoneTemplate;
};