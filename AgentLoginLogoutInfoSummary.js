module.exports = function(sequelize, DataTypes) {

    var AgentLoginLogoutInfoSummary = sequelize.define('Agent_Login_Logout_Info_Summary', {

            id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	        SessionID: {type: DataTypes.STRING},
            TenantId:  {type:DataTypes.INTEGER},
            CompanyId: {type:DataTypes.INTEGER},
            BusinessUnit: {type:DataTypes.STRING},
            ResourceId: {type: DataTypes.INTEGER},
            LoginAt: {type: DataTypes.DATE},
            LogoutAt: {type: DataTypes.DATE}

        }
    );
    return AgentLoginLogoutInfoSummary;
};
