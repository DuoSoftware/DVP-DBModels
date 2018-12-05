module.exports = function(sequelize, DataTypes) {
    var CallCDR = sequelize.define('CSDB_CallCDR',
        {
            id: {type: DataTypes.BIGINT, autoIncrement: true},
            Uuid: {type: DataTypes.STRING, primaryKey: true},
            CallUuid: DataTypes.STRING,
            BridgeUuid: DataTypes.STRING,
            MemberUuid: DataTypes.STRING,
            SipFromUser: DataTypes.STRING,
            SipToUser: DataTypes.STRING,
            SipResource: DataTypes.STRING,
            HangupCause: DataTypes.STRING,
            HangupDisposition: DataTypes.STRING,
            Direction: DataTypes.STRING,
            SwitchName: DataTypes.STRING,
            CallerContext: DataTypes.STRING,
            IsAnswered: DataTypes.BOOLEAN,
            IsQueued: DataTypes.BOOLEAN,
            CreatedTime: DataTypes.DATE,
            AnsweredTime: DataTypes.DATE,
            BridgedTime: DataTypes.DATE,
            HangupTime: DataTypes.DATE,
            Duration: DataTypes.INTEGER,
            AgentAnswered: DataTypes.BOOLEAN,
            BillSec: DataTypes.INTEGER,
            HoldSec: DataTypes.INTEGER,
            QueueSec: DataTypes.INTEGER,
            ProgressSec: DataTypes.INTEGER,
            AnswerSec: DataTypes.INTEGER,
            WaitSec: DataTypes.INTEGER,
            ProgressMediaSec: DataTypes.INTEGER,
            FlowBillSec: DataTypes.INTEGER,
            OriginatedLegs: DataTypes.STRING(1000),
            ExtraData: DataTypes.STRING(1000),
            DVPCallDirection: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            AppId: DataTypes.INTEGER,
            AgentSkill: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            CampaignId: DataTypes.INTEGER,
            CampaignName: DataTypes.STRING(1000),
            BusinessUnit: DataTypes.STRING,
            TimeAfterInitialBridge: DataTypes.INTEGER,
            QueuePriority: DataTypes.INTEGER
        }

    );


    return CallCDR;
};