/**
 * Created by Heshan.i on 8/10/2015.
 */
module.exports = function(sequelize, DataTypes) {
    var ArdsAttributeMetadata = sequelize.define('ARDS_AttributeMetaData', {

            Tenant: {type:DataTypes.INTEGER,unique: 'AttributeMetaDataIndex'},
            Company: {type:DataTypes.INTEGER,unique: 'AttributeMetaDataIndex'},
            AttributeClass: {type:DataTypes.STRING,unique: 'AttributeMetaDataIndex'},
            AttributeType: {type:DataTypes.STRING,unique: 'AttributeMetaDataIndex'},
            AttributeCategory:{type:DataTypes.STRING,unique: 'AttributeMetaDataIndex'},
            WeightPrecentage: DataTypes.FLOAT,
            AttributeMetaDataId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return ArdsAttributeMetadata;
};