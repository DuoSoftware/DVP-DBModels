module.exports = function(sequelize, DataTypes) {
    var FileUpload = sequelize.define('CSDB_FileUpload', {
            UniqueId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            FileStructure: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            URL: DataTypes.STRING,
            UploadTimestamp: DataTypes.STRING,
            Filename: DataTypes.STRING,
            DisplayName: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return FileUpload;
};