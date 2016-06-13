/**
 * Created by Heshan.i on 6/11/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var DashboardDailySummary = sequelize.define('Dashboard_DailySummary', {

            Company: DataTypes.STRING,
            Tenant: DataTypes.STRING,
            WindowName:DataTypes.STRING,
            Param1:DataTypes.STRING,
            Param2:DataTypes.STRING,
            MaxTime:DataTypes.INTEGER,
            TotalCount:DataTypes.INTEGER,
            TotalTime:DataTypes.INTEGER,
            ThresholdValue: DataTypes.INTEGER,
            SummaryDate: DataTypes.DATE,
            DashboardSummaryId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return DashboardDailySummary;
};