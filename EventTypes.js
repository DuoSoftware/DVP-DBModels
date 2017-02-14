/**
 * Created by dinusha on 2/2/2017.
 */

module.exports = function(sequelize, DataTypes) {
    var EventTypes = sequelize.define('CSDB_EventTypes', {
            Name: {type:DataTypes.STRING, primaryKey:true},
            Description: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return EventTypes;
};
