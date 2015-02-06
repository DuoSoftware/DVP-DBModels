module.exports = function(sequelize, DataTypes) {
    var Extension = sequelize.define('CSDB_Extension', {
            Extension: DataTypes.STRING,
            ExtensionName: DataTypes.STRING,
            Password: DataTypes.STRING,
            Domain: DataTypes.STRING,
            Enabled: DataTypes.BOOLEAN,
            Context: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            EmailAddress: DataTypes.STRING,
            ExtRefId: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            AddUser: DataTypes.STRING,
            UpdateUser: DataTypes.STRING,
            AddTime: DataTypes.DATE,
            UpdateTime: DataTypes.DATE
        },{
            tableName: 'CSDB_Extension', // this will define the table's name
            timestamps: false           // this will deactivate the timestamp columns
        }
    );


    return Extension;
};