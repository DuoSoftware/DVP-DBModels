module.exports = function (sequelize, DataTypes) {
    var ResAttributeBusinessUnit = sequelize.define('DB_RES_Attribute_Business_Unit', {
            BUId: {type:DataTypes.STRING, unique: 'ResAttributeBUCompositeIndex'},
            UnitName: DataTypes.STRING,
            AttributeId: {type:DataTypes.INTEGER, unique: 'ResAttributeBUCompositeIndex', onDelete: "cascade"},
            AttributeGroupId: {type:DataTypes.INTEGER, onDelete: "cascade"},
            TenantId:  DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER
        }
    );
    return ResAttributeBusinessUnit;
};