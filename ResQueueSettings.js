/**
 * Created by Pawan on 9/26/2017.
 */
module.exports = function (sequelize, DataTypes) {
    var ResQueueSettings = sequelize.define('DB_RES_QueueSettings', {

            TenantId:  {type:DataTypes.INTEGER, unique: "compositeIndex"},
            CompanyId: {type:DataTypes.INTEGER, unique: "compositeIndex"},
            ServerType:{type:DataTypes.STRING,allowNull: false},
            RequestType:{type:DataTypes.STRING,allowNull: false},
            Skills: {type:DataTypes.ARRAY(DataTypes.STRING)},
            RecordID: {type:DataTypes.STRING, unique: "compositeIndex",allowNull: false},
            QueueName:{type:DataTypes.STRING,allowNull: false},
            MaxWaitTime:{type:DataTypes.INTEGER,allowNull: false},
            MaxWaitCallCount:{type:DataTypes.INTEGER,allowNull: false},
            PublishPosition:{type:DataTypes.BOOLEAN,allowNull: false},
            CallAbandonedThreshold:{type:DataTypes.INTEGER,allowNull: false}
        }
    );


    return ResQueueSettings;
};