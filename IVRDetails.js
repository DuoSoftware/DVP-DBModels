module.exports = function(sequelize, DataTypes) {

    var IVRDetails = sequelize.define('IVRDetails', {

            SequenceId:{type: DataTypes.INTEGER},
	        SessionId: {type: DataTypes.STRING},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            BusinessUnit: {type:DataTypes.STRING},
            ConnectionType: {type: DataTypes.STRING},
            CustomerType: {type: DataTypes.STRING},
            Language: {type: DataTypes.STRING},
            IVRName: {type: DataTypes.STRING},
            NodeId: {type: DataTypes.STRING},
            NodeDisplay: {type: DataTypes.STRING},
            ExtraData: {type: DataTypes.JSONB},
            EventData: {type:DataTypes.INTEGER},
            EventTime: {type: DataTypes.DATE},
        }
    );
    return IVRDetails;
};
