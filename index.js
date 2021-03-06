var Sequelize = require('sequelize');
var Config = require('config');

var dbType = Config.DB.Type;
var database = Config.DB.Database;
var dbuser = Config.DB.User;
var dbpassword = Config.DB.Password;
var dbport = Config.DB.Port;
var dbhost = Config.DB.Host;
var cluster = Config.DB.Cluster;
var dialectOptions =Config.DB.dialectOptions;

var options = {
    dialect:dbType, // or 'sqlite', 'postgres', 'mariadb'
    port:dbport, // or 5432 (for postgres)
    host:dbhost //host address
};



if(cluster && (cluster === "true" || cluster === true)){

    options.pool = {
        max: 5,
        min: 0,
        idle: 10000
    };
}

if(dialectOptions){
    options.dialectOptions = dialectOptions;
};


var sequelize = new Sequelize(database, dbuser, dbpassword, options );

var models = [
    'Context',
    'Cloud',
    'CloudEndUser',
    'LoadBalancer',
    'Network',
    'CallServer',
    'ApplicationErrors',
    'Extension',
    'Trunk',
    'SipUACEndpoint',
    'SipNetworkProfile',
    'Schedule',
    'Appointment',
    'UserGroup',
    'TrunkPhoneNumber',
    'LimitInfo',
    'FileUpload',
    'FileDownload',
    'Translation',
    'CallRule',
    'IPAddress',
    'Application',
    'TrunkOperator',
    'AppDeveloper',
    'Conference',
    'CallCDR',
    'DVPEvent',
    'AttachedService',
    'BaseService',
    'ExtendedService',
    'ServiceDeploymentDistribution',
    'PBXMasterData',
    'PBXUser',
    'PBXUserTemplate',
    'Image',
    'Template',
    'Service',
    'CallCDRProcessed',
    "Variable",
    "Resource",
    "TemplateImage",
    "Volume",
    "FollowMe",
    "Forwarding",
    "DidNumber",
    "TransferCode",
    "Campaign",
    "CampaignPhones",
    "DialedCampaignPhones",
    "EmergencyNumber",
    "AutoAttendant",
    "Action",
    "FeatureCode",
    "ConferenceUser",
    "CampScheduleInfo",
    "CampCallbackInfo",
    "CampConfigurations",
    "CampCampaignInfo",
    "CampContactInfo",
    "CampOngoingCampaign",
    "CampContactSchedule",
    "CampContactCategory",
    "CampDialoutInfo",
    "CampContactSchedule",
    "CampCallbackConfigurations",
    "CampCallBackReasons",
    "CampAdditionalData",
    "CampMapContactSchedule",
    "ResResource",
    "ResTask",
    "ResTaskInfo",
    "ResResourceTask",
    "ResAttribute",
    "ResResourceAttributeTask",
    "ResGroups",
    "ResAttributeGroups",
    "ResSharedResource",
    "Endpoint",
    "ArdsRequestMetaData",
    "QueueProfile",
    "SipPresence",
    "SwarmCluster",
    "SwarmNode",
    "SwarmDockerInstance",
    "SwarmDockerEnvVariable",
    "DashboardMetaData",
    "DashboardDailySummary",
    "FileCategory",
    "Account",
    "UserResource",
    "TrunkIpAddress",
    "NotificationServer",
    "PersistenceMessages",
    "NumberBlacklist",
    "ResResourceStatusChangeInfo",
    "BuyPhoneNumbers",
    "CacheUpdates",
    "GCMKeys",
    "ConferenceTemplate",
    "SMSCDR",
    "Cron",
    "DashboardThresholdBreakDown",
    "VoxboneDIDRequest",
    "AuditTrails",
    "DashboardThresholdBreakDown",
    "VoxMasterData",
    "VoxChannelData",
    "VoxOderData",
    "VoxPendingChannelData",
    "Wallet",
    "WalletHistory",
    "WalletSessionData",
    "CustomerBillRecord",
    'CallRatings',
    'ResResourceStatusDurationInfo',
    'ResResourceTaskRejectInfo',
    'EventTypes',
    'ResResourceBreakTypes',
    'CampDncInfo',
    'ResResourceAcwInfo',
    'ContextCodecPref',
    'DashboardPublishMetaData',
    'ResResourceAcwInfo',
    'DialerAgentDialInfo',
    'DialerAgentDialInfoHistory',
    'ScheduledCallback',
    'ResQueueSettings',
    'IPPhoneConfig',
    'IPPhoneTemplate'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'/'+ model);
});


(function(m) {
    //m.LoadBalancer.belongsTo(m.Cloud);
    //m.CallServer.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.Cloud);
    //m.CloudEndUser.belongsTo(m.Cloud);
    //m.Network.belongsTo(m.CloudEndUser);

    //--------------------- Buy Numbers----------------------\\
        m.Trunk.hasMany(m.BuyPhoneNumbers, {as:"BuyPhoneNumbers", foreignKey: "TrunkId"});
        m.BuyPhoneNumbers.belongsTo(m.Trunk, {as:"Trunk", foreignKey: "TrunkId"});

        m.TrunkOperator.hasMany(m.BuyPhoneNumbers, {as:"BuyPhoneNumbers", foreignKey: "OperatorId"});
        m.BuyPhoneNumbers.belongsTo(m.Trunk, {as:"TrunkOperator", foreignKey: "OperatorId"});
    //--------------------- Buy Numbers----------------------\\

    m.TrunkPhoneNumber.belongsTo(m.Schedule, {as:"Schedule", foreignKey:"ScheduleId"});
    m.Schedule.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumber", foreignKey:"ScheduleId"});

    m.Trunk.hasMany(m.TrunkPhoneNumber, {as:"TrunkPhoneNumber", foreignKey: "TrunkId"});
    m.TrunkPhoneNumber.belongsTo(m.Trunk, {as:"Trunk", foreignKey: "TrunkId"});

    m.Trunk.hasMany(m.TrunkIpAddress, {as:"TrunkIpAddress", foreignKey: "TrunkId"});
    m.TrunkIpAddress.belongsTo(m.Trunk, {as:"Trunk", foreignKey: "TrunkId"});

    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfoInbound", foreignKey: "InboundLimitId"});
    m.LimitInfo.hasMany(m.TrunkPhoneNumber, {as:"LimitInTrunkPhoneNumber", foreignKey: "InboundLimitId"});

    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfoOutbound", foreignKey: "OutboundLimitId"});
    m.LimitInfo.hasMany(m.TrunkPhoneNumber, {as:"LimitOutTrunkPhoneNumber", foreignKey: "OutboundLimitId"});

    m.TrunkPhoneNumber.belongsTo(m.LimitInfo, {as:"LimitInfoBoth", foreignKey: "BothLimitId"});
    m.LimitInfo.hasMany(m.TrunkPhoneNumber, {as:"LimitBothTrunkPhoneNumber", foreignKey: "BothLimitId"});

    m.UserGroup.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.Extension.hasOne(m.UserGroup, {as:"UserGroup", foreignKey: "ExtensionId"});

    m.UserGroup.hasMany(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: 'GroupId'});
    m.SipUACEndpoint.belongsTo(m.UserGroup, {as: "UserGroup", foreignKey: 'GroupId'});

    m.Schedule.hasMany(m.Appointment, {as:"Appointment", foreignKey: "ScheduleId"});
    m.Appointment.belongsTo(m.Schedule, {as:"Schedule", foreignKey: "ScheduleId"});

    m.CallServer.hasMany(m.SipNetworkProfile, {as: "SipNetworkProfile", foreignKey: "CallServerId"});
    m.SipNetworkProfile.belongsTo(m.CallServer, {as: "CallServer", foreignKey: "CallServerId"});

    m.SipUACEndpoint.belongsTo(m.Extension, {as:"Extension", foreignKey: "ExtensionId"});
    m.Extension.hasOne(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey: "ExtensionId"});

    m.Trunk.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfile", foreignKey:"ProfileId"});
    m.SipNetworkProfile.hasMany(m.Trunk, {as:"Trunk", foreignKey:"ProfileId"});

    m.Context.hasMany(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey:"ContextId", onDelete:"RESTRICT"});
    m.SipUACEndpoint.belongsTo(m.Context, {as:"Context", foreignKey:"ContextId"});

    m.Trunk.belongsTo(m.LoadBalancer, {as: "LoadBalancer", foreignKey: "LoadBalancerId"});
    m.LoadBalancer.hasMany(m.Trunk, {as: "Trunk", foreignKey: "LoadBalancerId"});

    m.Cloud.belongsTo(m.LoadBalancer,{as: "LoadBalancer", foreignKey: "LoadBalancerId"});
    m.LoadBalancer.hasOne(m.Cloud,{as: "Cloud", foreignKey: "LoadBalancerId"});

    m.CloudEndUser.hasMany(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: "CloudEndUserId"});
    m.SipUACEndpoint.belongsTo(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "CloudEndUserId"});

    m.CloudEndUser.hasMany(m.Conference, {as: "Conference", foreignKey: "CloudEndUserId"});
    m.Conference.belongsTo(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "CloudEndUserId"});

    m.ConferenceTemplate.hasMany(m.Conference, {as: "Conference", foreignKey: "ActiveTemplate"});
    m.Conference.belongsTo(m.ConferenceTemplate, {as: "ConferenceTemplate", foreignKey: "ActiveTemplate"});

    m.Cloud.hasMany(m.CallServer, {as: "CallServer", foreignKey: "ClusterId"});
    m.CallServer.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.hasMany(m.Network, {as: "Network", foreignKey: "ClusterId"});
    m.Network.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.hasMany(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "ClusterId"});
    m.CloudEndUser.belongsTo(m.Cloud, {as: "Cloud", foreignKey: "ClusterId"});

    m.Cloud.belongsTo(m.Cloud, {as: "ParentCloud"});

    m.BaseService.belongsToMany(m.ExtendedService, {as: "ExtendedService", through: 'CSDB_BaseExtendedJunction'});
    m.ExtendedService.belongsToMany(m.BaseService, {as: "BaseService", through: 'CSDB_BaseExtendedJunction'});

    m.ExtendedService.belongsToMany(m.AttachedService, {as: "AttachedService", through: 'CSDB_ExtendedAttachJunction'});
    m.AttachedService.belongsToMany(m.ExtendedService, {as: "ExtendedService", through: 'CSDB_ExtendedAttachJunction'});

    m.BaseService.belongsToMany(m.AttachedService, {as: "AttachedService", through: 'CSDB_BaseAttachJunction'});
    m.AttachedService.belongsToMany(m.BaseService, {as: "BaseService", through: 'CSDB_BaseAttachJunction'});

    m.CloudEndUser.belongsTo(m.Network, {as: "Network", foreignKey: "NetworkId"});
    m.Network.hasOne(m.CloudEndUser, {as: "CloudEndUser", foreignKey: "NetworkId"});

    m.CloudEndUser.belongsTo(m.SipNetworkProfile, {as:"SipNetworkProfile", foreignKey:"SipNetworkProfileId"});
    m.SipNetworkProfile.hasOne(m.CloudEndUser, {as:"CloudEndUser", foreignKey:"SipNetworkProfileId"});

    m.IPAddress.belongsTo(m.CallServer, {as: "CallServer", foreignKey: "CallServerId"});
    m.CallServer.hasMany(m.IPAddress, {as: "IPAddress", foreignKey: "CallServerId"});

    m.Schedule.hasMany(m.CallRule, {as: "CallRule", foreignKey: "ScheduleId"});
    m.CallRule.belongsTo(m.Schedule, {as: "Schedule", foreignKey: "ScheduleId"});

    m.PBXUser.hasMany(m.PBXUserTemplate, {as: "PBXUserTemplate", foreignKey: "PBXUserUuid"});
    m.PBXUserTemplate.belongsTo(m.PBXUser, {as: "PBXUser", foreignKey: "PBXUserUuid"});
    m.PBXUser.belongsTo(m.PBXUserTemplate, {as: "PBXUserTemplateActive", constraints: false, foreignKey:"ActiveTemplate"});

    m.PBXUser.hasMany(m.FollowMe, {as: "FollowMe", foreignKey: "PBXUserUuid"});
    m.FollowMe.belongsTo(m.PBXUser, {as: "PBXUser", foreignKey: "PBXUserUuid"});
    m.FollowMe.belongsTo(m.PBXUser, {as: "DestinationUser", foreignKey: "DestinationUserUuid"});

    m.PBXUser.hasMany(m.Forwarding, {as: "Forwarding", foreignKey: "PBXUserUuid"});
    m.Forwarding.belongsTo(m.PBXUser, {as: "PBXUser", foreignKey: "PBXUserUuid"});
    m.Forwarding.belongsTo(m.PBXUser, {as: "DestinationUser", foreignKey: "DestinationUserUuid"});

    m.DidNumber.belongsTo(m.Extension, {as: "Extension", foreignKey: "ExtensionId"});
    m.Extension.hasMany(m.DidNumber, {as: "DidNumber", foreignKey: "ExtensionId"});

    m.Translation.hasMany(m.CallRule, {as: "TranslationCallRule", foreignKey: "TranslationId"});
    m.CallRule.belongsTo(m.Translation, {as: "Translation", foreignKey: "TranslationId"});

    m.Translation.hasMany(m.CallRule, {as: "TranslationANICallRule", foreignKey: "ANITranslationId"});
    m.CallRule.belongsTo(m.Translation, {as: "ANITranslation", foreignKey: "ANITranslationId"});

    m.CallRule.belongsTo(m.Application, {as: "Application", foreignKey: "AppId"});
    m.Application.hasMany(m.CallRule, {as:"CallRule", foreignKey: "AppId"});

    m.CallRule.belongsTo(m.TrunkPhoneNumber, {as: "TrunkPhoneNumber", foreignKey: "PhoneNumId"});
    m.TrunkPhoneNumber.hasMany(m.CallRule, {as:"CallRule", foreignKey: "PhoneNumId"});

    m.Trunk.belongsTo(m.Translation, {as: "Translation", foreignKey: "TranslationId"});
    m.Translation.hasMany(m.Trunk, {as: "Trunk", foreignKey: "TranslationId"});

    m.Trunk.belongsTo(m.TrunkOperator, {as: "TrunkOperator", foreignKey: "TrunkOperatorId"});
    m.TrunkOperator.hasMany(m.Trunk, {as: "Trunk", foreignKey: "TrunkOperatorId"});

    m.Application.belongsTo(m.Application, {as: "MasterApplication"});

    m.Application.belongsTo(m.AppDeveloper, {as: "AppDeveloper", foreignKey: "AppDeveloperId"});
    m.AppDeveloper.hasMany(m.Application, {as: "Application", foreignKey: "AppDeveloperId"});

    m.FileUpload.belongsTo(m.Application, {as: "Application", foreignKey: 'ApplicationId'});
    m.Application.hasMany(m.FileUpload, {as: "FileUpload", foreignKey: "ApplicationId"});

    m.Service.belongsTo(m.Image, {as: "Services" });
    m.Image.hasMany(m.Service, {as: "Services"});

    m.Image.hasMany(m.Variable, {as: "SystemVariables"});
    m.Variable.belongsTo(m.Image, {as: "SystemVariables"});

    m.Image.hasMany(m.Volume, {as: "SystemVolumes"});
    m.Volume.belongsTo(m.Image, {as: "SystemVolumes"});

    m.Image.belongsToMany(m.Image, {as: "Dependants", through: "CSDB_ImageDependance", foreignKey: "Dependant"});


    //Person.belongsToMany(Person, { as: 'Children', through: 'PersonChildren' })

    m.Template.belongsToMany(m.Image, {as: "TemplateImage", through: "CSDB_TemplateImage"});




/*
    "SwarmCluster",
        "SwarmNode",
        "SwarmDockerInstance"*/

    m.SwarmCluster.hasMany(m.SwarmNode, {as: "SwarmNode", foreignKey: "SwarmClusterId"});
    m.SwarmNode.belongsTo(m.SwarmCluster, {as: "SwarmCluster", foreignKey: "SwarmClusterId"});

    m.SwarmNode.hasMany(m.SwarmDockerInstance, {as: "SwarmDockerInstance", foreignKey: "SwarmNodeId"});
    m.SwarmDockerInstance.belongsTo(m.SwarmNode, {as: "SwarmNode", foreignKey: "SwarmNodeId"});

    m.SwarmDockerInstance.hasMany(m.SwarmDockerEnvVariable, {as: "Envs", foreignKey: "SwarmInstanceId", onDelete: 'cascade'});
    m.SwarmDockerEnvVariable.belongsTo(m.SwarmDockerInstance, {as: "SwarmDockerInstance", foreignKey: "SwarmInstanceId"});


    m.AutoAttendant.hasMany(m.Action,{as: "Actions"});
    m.Action.belongsTo( m.AutoAttendant,{as: "Actions"} );

    /*m.Application.belongsTo(m.AppDeveloper, {as: "AppDeveloper", foreignKey: "AppDeveloperId"});
    m.AppDeveloper.hasMany(m.Application, {as: "Application", foreignKey: "AppDeveloperId"});*/



    m.Conference.hasMany(m.ConferenceUser,{as: "ConferenceUser",foreignKey: "ConferenceId"});
    m.ConferenceUser.belongsTo(m.Conference,{as: "Conference",foreignKey: "ConferenceId"});

    m.ConferenceUser.belongsTo(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: "SipUACEndpointId"});
    m.SipUACEndpoint.hasOne(m.ConferenceUser,{as: "ConferenceUser",foreignKey: "SipUACEndpointId"});

    m.Conference.belongsTo(m.Extension,{as: "Extension",foreignKey: "ExtensionId"});
    m.Extension.hasOne(m.Conference,{as: "Conference",foreignKey: "ExtensionId"});

    m.Endpoint.belongsTo(m.SipUACEndpoint, {as: "SipUACEndpoint", foreignKey: "SipUACEndpointId"});
    m.SipUACEndpoint.hasMany(m.Endpoint, {as: "Endpoint", foreignKey: "SipUACEndpointId"});


    // ----------------------- [CampaignManager] ----------------------- //
        m.CampOngoingCampaign.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
        m.CampCampaignInfo.hasMany(m.CampOngoingCampaign, {as:"CampOngoingCampaign", foreignKey:"CampaignId"});

            //------------------CampConfigurations
            m.CampConfigurations.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
            m.CampCampaignInfo.hasOne(m.CampConfigurations, {as:"CampConfigurations", foreignKey:"CampaignId"});
            //------------------CampContactSchedule

            //------------------CampContactSchedule
            m.CampContactSchedule.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
            m.CampCampaignInfo.hasMany(m.CampContactSchedule, {as:"CampContactSchedule", foreignKey:"CampaignId"});

            m.CampContactSchedule.belongsTo(m.CampContactInfo, {as:"CampContactInfo", foreignKey:"CamContactId"});
            m.CampContactInfo.hasMany(m.CampContactSchedule, {as:"CampContactSchedule", foreignKey:"CamContactId"});

            m.CampContactSchedule.belongsTo(m.CampScheduleInfo, {as:"CampScheduleInfo", foreignKey:"CamScheduleId"});
            m.CampScheduleInfo.hasMany(m.CampContactSchedule, {as:"CampContactSchedule", foreignKey:"CamScheduleId"});
            //------------------CampContactSchedule

        //------------------CampCallbackInfo
        m.CampCallbackInfo.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
        m.CampCampaignInfo.hasMany(m.CampCallbackInfo, {as:"CampCallbackInfo", foreignKey:"CampaignId"});

        /*m.CampCallbackInfo.belongsTo(m.CampScheduleInfo, {as:"CampScheduleInfo", foreignKey:"CamScheduleId"});
        m.CampScheduleInfo.hasMany(m.CampCallbackInfo, {as:"CampCallbackInfo", foreignKey:"CamScheduleId"});*/
        //------------------CampCallbackInfo

            //------------------CampScheduleInfo
            m.CampScheduleInfo.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
            m.CampCampaignInfo.hasMany(m.CampScheduleInfo, {as:"CampScheduleInfo", foreignKey:"CampaignId"});
            //------------------CampScheduleInfo
        //------------------CampContactCategory
        m.CampContactInfo.belongsTo(m.CampContactCategory, {as:"CampContactCategory", foreignKey:"CategoryID"});
        m.CampContactCategory.hasMany(m.CampContactInfo, {as:"CampContactInfo", foreignKey:"CategoryID"});
            /*m.CampScheduleInfo.belongsTo(m.CampContactCategory, {as:"CampContactCategory", foreignKey:"CamScheduleId"});
            m.CampContactCategory.hasMany(m.CampScheduleInfo, {as:"CampScheduleInfo", foreignKey:"CamScheduleId"});*/
        //------------------CampContactCategory

            //------------------CampCallbackConfigurations
            m.CampCallbackConfigurations.belongsTo(m.CampConfigurations, {as:"CampConfigurations", foreignKey:"ConfigureId"});
            m.CampConfigurations.hasMany(m.CampCallbackConfigurations, {as:"CampCallbackConfigurations", foreignKey:"ConfigureId"});
            //------------------CampCallbackConfigurations

    //------------------CampCallbackConfigurations
    m.CampCallbackConfigurations.belongsTo(m.CampCallBackReasons, {as:"CampCallBackReasons", foreignKey:"ReasonId"});
    m.CampCallBackReasons.hasMany(m.CampCallbackConfigurations, {as:"CampCallbackConfigurations", foreignKey:"ReasonId"});
    //------------------CampCallbackConfigurations

        //------------------CampCallbackConfigurations
        m.CampAdditionalData.belongsTo(m.CampCampaignInfo, {as:"CampCampaignInfo", foreignKey:"CampaignId"});
        m.CampCampaignInfo.hasMany(m.CampAdditionalData, {as:"CampAdditionalData", foreignKey:"CampaignId"});
        //------------------CampCallbackConfigurations

    //------------------CampMapContactSchedule
    m.CampMapContactSchedule.belongsTo(m.CampContactCategory, {as:"CampContactCategory", foreignKey:"CategoryID"});
    m.CampContactCategory.hasMany(m.CampMapContactSchedule, {as:"CampMapContactSchedule", foreignKey:"CategoryID"});
    //------------------CampMapContactSchedule

    // ----------------------- [CampaignManager] ----------------------- //


    // ----------------------- [Agent Dialer] ----------------------- //

    // ----------------------- [Agent Dialer] ----------------------- //

    // ----------------------- [Resource Service] ----------------------- //

        //------------------ResSharedResource
        m.ResSharedResource.belongsTo(m.ResResource, {as:"ResTaskInfo", foreignKey:"ResourceId"});
        m.ResResource.hasMany(m.ResSharedResource, {as:"ResSharedResource", foreignKey:"ResourceId"});

        m.ResSharedResource.belongsTo(m.ResTask, {as:"ResTask", foreignKey:"TaskId"});
        m.ResTask.hasMany(m.ResSharedResource, {as:"ResSharedResource", foreignKey:"TaskId"});
        //------------------ResSharedResource
            //------------------ResResourceTask
                m.ResTask.belongsTo(m.ResTaskInfo, {as:"ResTaskInfo", foreignKey:"TaskInfoId"});
                m.ResTaskInfo.hasMany(m.ResTask, {as:"ResTask", foreignKey:"TaskInfoId"});
            //------------------ResResourceTask
        //------------------ResResourceTask
            m.ResResourceTask.belongsTo(m.ResTask, {as:"ResTask", foreignKey:"TaskId"});
            m.ResTask.hasMany(m.ResResourceTask, {as:"ResResourceTask", foreignKey:"TaskId"});

            m.ResResourceTask.belongsTo(m.ResResource, {as:"ResResource", foreignKey:"ResourceId"});
            m.ResResource.hasMany(m.ResResourceTask, {as:"ResResourceTask", foreignKey:"ResourceId"});
        //------------------ResResourceTask

            //------------------ResResourceAttributeTask
                m.ResResourceAttributeTask.belongsTo(m.ResAttribute, {as:"ResAttribute", foreignKey:"AttributeId"});
                m.ResAttribute.hasMany(m.ResResourceAttributeTask, {as:"ResResourceAttributeTask", foreignKey:"AttributeId"});

                m.ResResourceAttributeTask.belongsTo(m.ResResourceTask, {as:"ResResourceTask", foreignKey:"ResTaskId"});
                m.ResResourceTask.hasMany(m.ResResourceAttributeTask, {as:"ResResourceAttributeTask", foreignKey:"ResTaskId"});
            //------------------ResResourceAttributeTask

        //------------------ResAttributeGroups
            m.ResAttributeGroups.belongsTo(m.ResGroups, {as:"ResGroups", foreignKey:"GroupId"});
            m.ResGroups.hasMany(m.ResAttributeGroups, {as:"ResAttributeGroups", foreignKey:"GroupId"});

            m.ResAttributeGroups.belongsTo(m.ResAttribute, {as:"ResAttribute", foreignKey:"AttributeId"});
            m.ResAttribute.hasMany(m.ResAttributeGroups, {as:"ResAttributeGroups", foreignKey:"AttributeId"});

        //------------------ResAttributeGroups

        //------------------ResResourceStatusChangeInfo
            m.ResResourceStatusChangeInfo.belongsTo(m.ResResource, {as:"ResResource", foreignKey:"ResourceId"});
            m.ResResource.hasMany(m.ResResourceStatusChangeInfo, {as:"ResResourceStatusChangeInfo", foreignKey:"ResourceId"});
        //------------------ResResourceStatusChangeInfo

    // ----------------------- [Resource Service] ----------------------- //
// -------------------------------- FIle categories --------------------------------------//

    m.FileUpload.belongsTo(m.FileCategory,{as:"FileCategory",foreignKey:"FileCategoryId"});
    m.FileCategory.hasMany(m.FileUpload,{as:"FileUpload",foreignKey:"FileCategoryId"});


    //------------------Wallet
        m.WalletHistory.belongsTo(m.Wallet, {as:"Wallet", foreignKey:"WalletId"});
        m.Wallet.hasMany(m.WalletHistory, {as:"WalletHistory", foreignKey:"WalletId"});


    //------------------Wallet
//------------------IPPhone --------------------------//
    //IPPhoneConfig,IPPhoneTemplate
    m.IPPhoneConfig.belongsTo(m.IPPhoneTemplate,{as:"IPPhoneTemplate",foreignKey:"model"});
    m.IPPhoneTemplate.hasMany(m.IPPhoneConfig,{as:"IPPhoneConfig",foreignKey:"model"});


    m.IPPhoneConfig.belongsTo(m.SipUACEndpoint, {as:"SipUACEndpoint", foreignKey: "Id"});
    m.SipUACEndpoint.hasOne(m.IPPhoneConfig, {as:"IPPhoneConfig", foreignKey: "Id"});

//------------------------ [Ards] -------------------------------//
    //m.ArdsAttributeInfo.belongsToMany(m.ArdsAttributeMetaData, {as: "ArdsAttributeMetaData", through: 'ARDS_AttributeMetaJunction'});
    //m.ArdsAttributeMetaData.belongsToMany(m.ArdsAttributeInfo, {as: "ArdsAttributeInfo", through: 'ARDS_AttributeMetaJunction'});

    //m.ArdsAttributeMetaData.belongsTo(m.ArdsRequestMetaData, {as:"ArdsRequestMetaData", foreignKey:"RequestMetadataId"});
    //m.ArdsRequestMetaData.hasMany(m.ArdsAttributeMetaData, {as:"ArdsAttributeMetaData", foreignKey:"RequestMetadataId"});

})(module.exports);


module.exports.SequelizeConn = sequelize;
