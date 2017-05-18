/**
 * Created by Waruna on 5/18/2017.
 */


module.exports = function(sequelize, DataTypes) {
    var DialerAgentDialInfo = sequelize.define('DB_Dialer_DialerAgentDialInfo', {

            DialerState: DataTypes.STRING,
            AttemptCount:DataTypes.INTEGER,
            ContactNumber: DataTypes.STRING,
            ResourceName: DataTypes.STRING,
            ResourceId:DataTypes.INTEGER,
            StartDate:DataTypes.DATE,
            BatchName: DataTypes.STRING,
            AgentDialNumberId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return DialerAgentDialInfo;
};