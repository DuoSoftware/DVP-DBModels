/**
 * Created by Rajinda on 6/29/2015.
 */



module.exports = function (sequelize, DataTypes) {
    var CampNumberLoadInfo = sequelize.define('DB_CAMP_NumberLoadInfo', {
            CampaignId: {type: DataTypes.INTEGER, unique: 'CampNumberLoadInfoIndex'},
            CamScheduleId: {type: DataTypes.INTEGER, unique: 'CampNumberLoadInfoIndex'},
            RowCount: {type: DataTypes.INTEGER},
            Offset: {type: DataTypes.INTEGER},
            PageNo: {type: DataTypes.INTEGER},
            CamNumberLoadId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return CampNumberLoadInfo;
};
