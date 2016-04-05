/**
 * Created by Rajinda on 4/5/2016.
 */


module.exports = function (sequelize, DataTypes) {
    var ResSharedResource = sequelize.define('DB_RES_SharedResource', {
            TaskId: DataTypes.INTEGER,
            ResourceId: DataTypes.INTEGER,
            SharedId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );

    return ResSharedResource;
};