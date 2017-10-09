module.exports = function(sequelize, DataTypes) {
    var IPPhoneTemplate = sequelize.define('IPPhoneTemplate', {

            model:{type:DataTypes.STRING, primaryKey:true},
            template: DataTypes.TEXT,
            make: DataTypes.STRING
        }
    );

    return IPPhoneTemplate;
};