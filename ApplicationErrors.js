/**
 * Created by pawan on 4/22/2015.
 */


module.exports = function(sequelize, DataTypes) {
    var ApplicationErrors = sequelize.define('CSDB_ApplicationErrors', {
            VoiceAppID: DataTypes.STRING,
            Code: DataTypes.STRING,
            Message:DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER

        }
    );


    return ApplicationErrors;
};

