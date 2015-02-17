module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define('CSDB_Appointment', {
            AppointmentName: DataTypes.STRING,
            Action: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            StartDate: DataTypes.STRING,
            EndDate: DataTypes.STRING,
            StartTime: DataTypes.STRING,
            EndTime: DataTypes.STRING,
            DaysOfWeek: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return Schedule;
};