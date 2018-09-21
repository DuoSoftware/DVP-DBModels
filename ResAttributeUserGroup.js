module.exports = function (sequelize, DataTypes) {
    var ResAttributeUserGroup = sequelize.define('DB_RES_Attribute_User_Group', {
            GroupId: {type:DataTypes.STRING, unique: 'ResAttributeGroupCompositeIndex'},
            GroupName: DataTypes.STRING,
            AttributeId: {type:DataTypes.INTEGER, unique: 'ResAttributeGroupCompositeIndex', onDelete: "cascade"},
            AttributeGroupId: {type:DataTypes.INTEGER, onDelete: "cascade"},
            TenantId:  DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER
        }
    );
    return ResAttributeUserGroup;
};