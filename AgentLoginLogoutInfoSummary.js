module.exports = function(sequelize, DataTypes) {

    var AgentLoginLogoutInfoSummary = sequelize.define('Agent_Login_Logout_Info_Summary', {

            id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	        SessionID: {type: DataTypes.STRING},
            AgentId: {type: DataTypes.INTEGER},
            AgentName: {type: DataTypes.STRING},
            LoginAt: {type: DataTypes.DATE},
            LogoutAt: {type: DataTypes.DATE}

        }
    );
    return AgentLoginLogoutInfoSummary;
};
