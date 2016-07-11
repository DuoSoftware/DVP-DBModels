module.exports = function(sequelize, DataTypes) {
    var FileUpload = sequelize.define('CSDB_FileUpload', {
            UniqueId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            FileStructure: {type:DataTypes.STRING, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            URL: DataTypes.STRING,
            UploadTimestamp: DataTypes.STRING,
            Filename: {type:DataTypes.STRING, allowNull: false, unique: "compositeIndex"},
            Version:{type:DataTypes.INTEGER, allowNull: false, unique: "compositeIndex"},
            DisplayName: DataTypes.STRING,
            CompanyId: {type:DataTypes.INTEGER, allowNull: false, unique: "compositeIndex"},
            TenantId: {type:DataTypes.INTEGER, allowNull: false, unique: "compositeIndex"},
            RefId:DataTypes.STRING,
            Status:DataTypes.STRING
        }
    );


    return FileUpload;
};