
module.exports = function(sequelize, DataTypes) {

    var Account = sequelize.define('CSDB_Accounts', {


            Username: {type: DataTypes.STRING, allowNull: false, unique: true},
            Email: {type: DataTypes.STRING, allowNull: false, unique: true},
            ProviderId: {type: DataTypes.STRING, allowNull: false, unique: true},
            ClientSecret: {type: DataTypes.STRING, allowNull: false, unique: true},
            DisplayName: DataTypes.STRING



        }
    )
    return Account;
};

