/**
 * Created by Heshan.i on 11/11/2016.
 */

module.exports = function(sequelize, DataTypes) {
    var VoxboneDIDRequest = sequelize.define('Voxbone_DIDRequest', {

            Company: DataTypes.INTEGER,
            Tenant: DataTypes.INTEGER,
            DidId:DataTypes.STRING,
            TrunkId:DataTypes.STRING,
            CapacityRequested:DataTypes.INTEGER,
            CapacityEnabled:DataTypes.INTEGER,
            DidEnabled:DataTypes.BOOLEAN,
            RequestStatus:DataTypes.ENUM('requested', 'processing', 'completed'),
            RecordId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}
        }
    );
    return VoxboneDIDRequest;
};