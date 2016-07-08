module.exports = function(sequelize, DataTypes) {
    var CallRule = sequelize.define('CSDB_CallRule', {
            CallRuleDescription: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            Enable: DataTypes.BOOLEAN,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false},
            TenantId: {type: DataTypes.INTEGER, allowNull: false},
            DNIS: DataTypes.STRING,
            ANI: DataTypes.STRING,
            DNISRegEx: DataTypes.STRING,
            ANIRegEx: DataTypes.STRING,
            RegExPattern: DataTypes.STRING, //STARTWITH, EXACTMATCH, ANY, CUSTOM
            ANIRegExPattern: DataTypes.STRING, //STARTWITH, EXACTMATCH, ANY, CUSTOM
            TrunkId: DataTypes.INTEGER,
            TrunkNumber: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            Priority: {type: DataTypes.INTEGER, allowNull: false},
            ContextRegEx: DataTypes.STRING,
            Context: DataTypes.STRING,
            Direction: {type: DataTypes.STRING, allowNull: false} //INBOUND, OUTBOUND

        }
    );

    return CallRule;
};