/**
 * Created by Heshan.i on 10/25/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var DashboardThresholdBreakDown = sequelize.define('Dashboard_ThresholdBreakDown', {

            Company: DataTypes.STRING,
            Tenant: DataTypes.STRING,
            WindowName:DataTypes.STRING,
            Param1:DataTypes.STRING,
            Param2:DataTypes.STRING,
            BreakDown:DataTypes.STRING,
            ThresholdCount:DataTypes.INTEGER,
            SummaryDate: DataTypes.DATE,
            Hour: DataTypes.INTEGER,
            ThresholdBreakDownId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return DashboardThresholdBreakDown;
};