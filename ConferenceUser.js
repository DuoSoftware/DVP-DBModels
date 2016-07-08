module.exports = function(sequelize, DataTypes) {
    var ConferenceUser = sequelize.define('CSDB_ConferenceUser', {
            ActiveTalker: {type: DataTypes.BOOLEAN, allowNull: false},
            Def: {type: DataTypes.BOOLEAN, allowNull: false},
            Mute: {type: DataTypes.BOOLEAN, allowNull: false},
            Mod: {type: DataTypes.BOOLEAN, allowNull: false},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,//OutBound/Inbound
            ObjCategory: DataTypes.STRING,//Internal/External
            CurrentDef:DataTypes.BOOLEAN,
            CurrentMute:DataTypes.BOOLEAN,
            CurrentMod:DataTypes.BOOLEAN,
            Destination:DataTypes.STRING,//Phonenumber
            JoinType:{type: DataTypes.STRING, allowNull: false},//In/Out
            UserStatus: DataTypes.STRING //

        }
    );


    return ConferenceUser;
};
