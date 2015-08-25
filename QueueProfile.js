/**
 * Created by a on 8/25/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var QueueProfile = sequelize.define('CSDB_QueueMusic', {
            Name: {type: DataTypes.STRING,unique: true},
            Description: DataTypes.STRING,
            Class: DataTypes.STRING,
            MOH: DataTypes.STRING,
            Announcement: DataTypes.STRING,
            FirstAnnounement:  DataTypes.STRING,
            AnnouncementTime: DataTypes.INTEGER,
            Type: DataTypes.STRING,
            Category: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER

        }
    );

    return QueueProfile;
};

