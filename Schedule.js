module.exports = function(sequelize, DataTypes) {
    var Schedule = sequelize.define('CSDB_Schedule', {
            ScheduleName: {type: DataTypes.STRING, allowNull: false, unique: 'schedule_company_unique'},
            Action: DataTypes.STRING,
            ExtraData: DataTypes.STRING,
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'schedule_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'schedule_company_unique'},
        }
    );


    return Schedule;
};