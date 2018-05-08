/**
 * Created by a on 6/4/2015.
 */


module.exports = function(sequelize, DataTypes) {
    var AutoAttendant = sequelize.define('CSDB_AutoAttendant', {
            Name: {type: DataTypes.STRING,unique: true},
            Code: DataTypes.STRING,
            Extention: {type: DataTypes.STRING,unique: "autoattendcompositeIndex"},
            DayGreeting: DataTypes.STRING,
            NightGreeting: DataTypes.STRING,
            InvalidDigitSound: DataTypes.STRING,
            MenuSound: DataTypes.STRING,
            Tries: DataTypes.INTEGER,
            TimeOut: DataTypes.INTEGER,
            EnableExtention: DataTypes.BOOLEAN,
            ExtentionLength: DataTypes.INTEGER,
            Company: {type: DataTypes.INTEGER,unique: "autoattendcompositeIndex"},
            Tenant: {type: DataTypes.INTEGER,unique: "autoattendcompositeIndex"}
        }
    );


    return AutoAttendant;
};
