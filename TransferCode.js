module.exports = function(sequelize, DataTypes) {
    var TransferCode = sequelize.define('CSDB_TransferCode', {
            InternalTransfer: DataTypes.INTEGER,
            ExternalTransfer: DataTypes.INTEGER,
            GroupTransfer: DataTypes.INTEGER,
            ConferenceTransfer: DataTypes.INTEGER,
            CompanyId: {type: DataTypes.INTEGER, allowNull: false, unique: 'tc_company_unique'},
            TenantId: {type: DataTypes.INTEGER, allowNull: false, unique: 'tc_company_unique'},
            ObjClass: DataTypes.STRING,
            ObjType: DataTypes.STRING,
            ObjCategory: DataTypes.STRING
        }
    );


    return TransferCode;
};