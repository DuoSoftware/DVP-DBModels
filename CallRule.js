module.exports = function(sequelize, DataTypes) {
    var CallRule = sequelize.define('CSDB_CallRule', {
            CallRuleDescription: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING, //Inbound ,Outbound
            ObjCategory: DataTypes.STRING, //IVR, FAX, URL, Gateway
            Enable: DataTypes.BOOLEAN,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER,
            DNISRegEx: DataTypes.STRING,
            ANIRegEx: DataTypes.STRING,
            RegExPattern: DataTypes.STRING,
            TrunkId: DataTypes.INTEGER,
            TrunkNumber: DataTypes.STRING,
            TargetScript: DataTypes.STRING,
            ExtraData: DataTypes.STRING
        }
    );

    return CallRule;
};