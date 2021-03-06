/**
 * Created by Pawan on 7/15/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var Cron = sequelize.define('CSDB_Cron', {
            UniqueId: DataTypes.STRING,
            Description: DataTypes.STRING,
            CronePattern: DataTypes.STRING,
            CallbackURL: DataTypes.STRING,
            CallbackData: DataTypes.STRING(2000),
            Reference:DataTypes.STRING,
            Company:DataTypes.INTEGER,
            Tenant:DataTypes.INTEGER,
            Timezone:DataTypes.STRING
        }
    );


    return Cron;
};