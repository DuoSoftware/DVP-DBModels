module.exports = function(sequelize, DataTypes) {
    var FileDownload = sequelize.define('CSDB_FileDownload', {
            DownloadId: {type: DataTypes.STRING, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Filename: {type: DataTypes.STRING, allowNull: false},
            DownloadTimestamp: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false}
        }
    );


    return FileDownload;
};