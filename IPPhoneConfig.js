module.exports = function(sequelize, DataTypes) {
    var IPPhoneConfig = sequelize.define('IPPhoneConfig', {
            mac: {type:DataTypes.STRING, primaryKey:true},
            configdata: DataTypes.JSON,
            model:DataTypes.STRING
        }
    );
    return IPPhoneConfig;
};