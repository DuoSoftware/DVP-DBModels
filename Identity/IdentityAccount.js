module.exports = function(sequelize, DataTypes) {
    var IdentityAccount = sequelize.define('IdentityAccount', {

            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},


            identity_id: {type: DataTypes.INTEGER, unique: "identity_organization"},
            organization_id: {type: DataTypes.INTEGER, unique: "identity_organization"},
            //username: {type: DataTypes.STRING, allowNull: false, unique: true},
            roles: {type: DataTypes.STRING},
            joined: {type: DataTypes.DATE, allowNull: false},
            active: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
            verified: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
            multi_login: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
            allow_outbound: {type: DataTypes.BOOLEAN, allowNull: false, default: false},
            auth_mechanism: {type: DataTypes.STRING, allowNull: false, default: 'facetone'},
            //allowed_file_categories: {type: DataTypes.STRING},
            //////////has one sip uac////////////////////////////////////////
            ///////////has one resource//////////////////////////////////////
            ////////////has many file categories as allowed_file_categories//////////
        }, {
            schema: "auth"
        }
    );

    return IdentityAccount;
};
