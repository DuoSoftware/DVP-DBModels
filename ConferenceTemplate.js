/**
 * Created by dinusha on 6/9/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var ConferenceTemplate = sequelize.define('CSDB_ConferenceTemplate', {
            TemplateName: {type:DataTypes.STRING, primaryKey:true},
            Description: DataTypes.STRING,
            TemplateGroup: DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER

        }
    );


    return ConferenceTemplate;
};
