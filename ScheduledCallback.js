/**
 * Created by Heshan.i on 7/28/2017.
 */

module.exports = function(sequelize, DataTypes) {
    var ScheduledCallback = sequelize.define('DB_CAMP_ScheduledCallback', {
            Class: DataTypes.STRING,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            SessionId: DataTypes.STRING,
            ContactId: DataTypes.STRING,
            CallbackData: DataTypes.JSON,
            RequestedTime:DataTypes.DATE,
            Duration:DataTypes.INTEGER,
            DispatchedTime:DataTypes.DATE,
            ScheduledCallBackId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return ScheduledCallback;
};