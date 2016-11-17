/**
 * Created by Heshan.i on 11/11/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var VoxboneDIDRequest = sequelize.define('Voxbone_DIDRequest', {

            Company: DataTypes.INTEGER,
            Tenant: DataTypes.INTEGER,
            DidId:DataTypes.STRING,
            DidNumber:DataTypes.STRING,
            TrunkId:DataTypes.STRING,
            CapacityRequested:DataTypes.INTEGER,
            CapacityEnabled:DataTypes.INTEGER,
            DidEnabled:DataTypes.BOOLEAN,
            DidSetupPrice: DataTypes.FLOAT,
            DidMonthlyPrice: DataTypes.FLOAT,
            RequestStatus:DataTypes.ENUM('requested', 'processing', 'completed'),
            RecordId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return VoxboneDIDRequest;
};