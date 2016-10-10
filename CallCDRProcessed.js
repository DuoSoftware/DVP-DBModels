module.exports = function(sequelize, DataTypes) {
    var CallCDRProcessed = sequelize.define('CSDB_CallCDRProcessed',
        {
            id: {type: DataTypes.BIGINT, autoIncrement: true},
            Uuid: {type: DataTypes.STRING, primaryKey: true},
            CallUuid: DataTypes.STRING,
            BridgeUuid: DataTypes.STRING,
            SipFromUser: DataTypes.STRING,
            SipToUser: DataTypes.STRING,
            RecievedBy: DataTypes.STRING,
            HangupCause: DataTypes.STRING,
            HangupParty: DataTypes.STRING,
            SwitchName: DataTypes.STRING,
            CallerContext: DataTypes.STRING,
            TransferredParties: DataTypes.STRING(10000),
            IsQueued: DataTypes.BOOLEAN,
            IsAnswered: DataTypes.BOOLEAN,
            CreatedTime: DataTypes.DATE,
            AnsweredTime: DataTypes.DATE,
            BridgedTime: DataTypes.DATE,
            HangupTime: DataTypes.DATE,
            Duration: DataTypes.INTEGER,
            AgentAnswered: DataTypes.BOOLEAN,
            IvrConnectSec: DataTypes.INTEGER,
            BillSec: DataTypes.INTEGER,
            HoldSec: DataTypes.INTEGER,
            QueueSec: DataTypes.INTEGER,
            ProgressSec: DataTypes.INTEGER,
            AnswerSec: DataTypes.INTEGER,
            WaitSec: DataTypes.INTEGER,
            ProgressMediaSec: DataTypes.INTEGER,
            FlowBillSec: DataTypes.INTEGER,
            ExtraData: DataTypes.STRING(1000),
            DVPCallDirection: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            AppId: DataTypes.INTEGER,
            AgentSkill: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }

    );


    return CallCDRProcessed;
};