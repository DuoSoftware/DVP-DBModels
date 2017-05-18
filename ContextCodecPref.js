/**
 * Created by dinusha on 4/5/2017.
 */
module.exports = function(sequelize, DataTypes) {
    var ContextCodecPref = sequelize.define('CSDB_ContextCodecPref', {
            Context1: DataTypes.STRING,
            Context2: DataTypes.STRING,
            Codecs: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return ContextCodecPref;
};
