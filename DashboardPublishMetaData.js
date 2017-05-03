/**
 * Created by Heshan.i on 5/3/2017.
 */

module.exports = function(sequelize, DataTypes) {
    var DashboardPublishMetaData = sequelize.define('Dashboard_Publish_MetaData', {

            WindowName: {type:DataTypes.STRING,unique: 'DashboardPubMetaDataIndex'},
            EventName: {type:DataTypes.STRING,unique: 'DashboardPubMetaDataIndex'},
            DashboardPubMetaDataId:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true}

        }
    );
    return DashboardPublishMetaData;
};