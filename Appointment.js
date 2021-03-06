module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define('CSDB_Appointment', {
            AppointmentName: DataTypes.STRING,
            Action: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            StartDate: DataTypes.STRING,
            EndDate: DataTypes.STRING,
            StartTime: DataTypes.STRING,
            EndTime: DataTypes.STRING,
            RecurrencePattern: DataTypes.STRING,
            DaysOfWeek: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: DataTypes.INTEGER,
            TenantId: DataTypes.INTEGER
        }
    );


    return Appointment;
};