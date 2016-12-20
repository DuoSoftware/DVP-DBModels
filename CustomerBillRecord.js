/**
 * Created by Rajinda on 9/29/2015.
 */


module.exports = function (sequelize, DataTypes) {
    var CustomerBillRecord = sequelize.define('DB_CustomerBillRecord', {
            email : DataTypes.STRING,
            subscriptions : DataTypes.STRING,
            Cycle: DataTypes.STRING,
            customer: DataTypes.STRING,
            TenantId:  DataTypes.INTEGER,
            CompanyId: DataTypes.INTEGER,
            Status: DataTypes.BOOLEAN,
            OtherJsonData: DataTypes.JSON,
            CustomerBillId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
        }
    );
    return CustomerBillRecord;
};