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
            Filename: {type:DataTypes.STRING,unique: "compositeIndex"},
            Version:{type:DataTypes.STRING,unique: "compositeIndex"},
            DisplayName: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return FileUpload;
};