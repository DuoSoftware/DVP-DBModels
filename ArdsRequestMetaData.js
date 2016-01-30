/**
 * Created by Heshan Indika on 8/07/2015.
 */



module.exports = function(sequelize, DataTypes) {
    var ArdsRequestMetaData = sequelize.define('ARDS_RequestMetaData', {

            Tenant: {type:DataTypes.INTEGER,unique: 'RequestMetadataIndex'},
            Company: {type:DataTypes.INTEGER,unique: 'RequestMetadataIndex'},
            ServerType: {type:DataTypes.STRING,unique: 'RequestMetadataIndex'},
            RequestType: {type:DataTypes.STRING,unique: 'RequestMetadataIndex'},
            AttributeGroups:DataTypes.STRING,
            ServingAlgo: DataTypes.STRING,
            HandlingAlgo: DataTypes.STRING,
            SelectionAlgo: DataTypes.STRING,
            ReqHandlingAlgo: DataTypes.STRING,
            ReqSelectionAlgo: DataTypes.STRING,
            MaxReservedTime: DataTypes.INTEGER,
            MaxRejectCount: DataTypes.INTEGER,
            MaxAfterWorkTime: DataTypes.INTEGER,
            RequestMetadataId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return ArdsRequestMetaData;
};
