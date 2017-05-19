/**
 * Created by Waruna on 5/18/2017.
 */


module.exports = function (sequelize, DataTypes) {
    var DialerAgentDialInfo = sequelize.define('DB_Dialer_DialerAgentDialInfo', {

            DialerState: DataTypes.STRING,
            AttemptCount: DataTypes.INTEGER,
            ContactNumber: {type:DataTypes.STRING,unique: 'DialerAgentDialInfoIndex'},
            ResourceName: DataTypes.STRING,
            ResourceId: DataTypes.STRING,
            StartDate: DataTypes.DATE,
            BatchName: {type:DataTypes.STRING,unique: 'DialerAgentDialInfoIndex'},
            OtherData: DataTypes.STRING,
            TenantId: {type: DataTypes.INTEGER},
            CompanyId: {type: DataTypes.INTEGER},
            AgentDialNumberId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return DialerAgentDialInfo;
};