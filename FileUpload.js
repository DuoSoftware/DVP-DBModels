module.exports = function(sequelize, DataTypes) {
    var FileUpload = sequelize.define('CSDB_FileUpload', {
            UniqueId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            FileStructure: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: {type:DataTypes.STRING,unique: "filecompositeIndex"},
            URL: DataTypes.STRING,
            UploadTimestamp: DataTypes.STRING,
            Filename: {type:DataTypes.STRING,unique: "filecompositeIndex"},
            Version:{type:DataTypes.INTEGER,unique: "filecompositeIndex"},
            DisplayName: DataTypes.STRING,
            CompanyId: {type:DataTypes.INTEGER,unique: "filecompositeIndex"},
            TenantId: {type:DataTypes.INTEGER,unique: "filecompositeIndex"},
            RefId:DataTypes.STRING,
            Status:DataTypes.STRING,
            Size:DataTypes.INTEGER,
            Source:{type: DataTypes.ENUM('LOCAL', 'MONGO')}

        }
    );


    return FileUpload;
};