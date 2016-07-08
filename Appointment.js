module.exports = function(sequelize, DataTypes) {
    var Appointment = sequelize.define('CSDB_Appointment', {
            AppointmentName: {type: DataTypes.STRING, allowNull: false, unique: 'appointment_company_unique'},
            Action: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            StartDate: DataTypes.STRING,
            EndDate: DataTypes.STRING,
            StartTime: DataTypes.DATE,
            EndTime: DataTypes.DATE,
            RecurrencePattern: DataTypes.STRING,
            DaysOfWeek: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'appointment_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'appointment_company_unique'}
        }
    );


    return Appointment;
};