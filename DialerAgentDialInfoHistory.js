/**
 * Created by Waruna on 5/18/2017.
 */


module.exports = function(sequelize, DataTypes) {
    var DialerAgentDialInfoHistory = sequelize.define('DB_Dialer_DialerAgentDialInfoHistory', {

            DialerState: DataTypes.STRING,
            AttemptCount:DataTypes.INTEGER,
            ContactNumber: DataTypes.STRING,
            ResourceName: DataTypes.STRING,
            ResourceId:DataTypes.INTEGER,
            StartDate:DataTypes.DATE,
            BatchName: DataTypes.STRING,
            AgentDialNumberId:DataTypes.INTEGER,
            AgentDialHistoryId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return DialerAgentDialInfoHistory;
};