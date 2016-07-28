/**
 * Created by dinusha on 6/14/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var SMSCDR = sequelize.define('CSDB_SMSCDR',
        {
            id: {type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
            FromNumber: DataTypes.STRING,
            ToNumber: DataTypes.STRING,
            ErrorReason: DataTypes.STRING,
            IsSuccess: DataTypes.BOOLEAN,
            Direction: DataTypes.STRING,
            HandledTime: DataTypes.DATE,
            AppId: DataTypes.INTEGER,
            Message: DataTypes.STRING(2000),
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }

    );

    return SMSCDR;
};
