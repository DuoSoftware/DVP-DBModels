module.exports = function(sequelize, DataTypes) {
    var CallPerformanceTesting = sequelize.define('Call_PerformanceTesting',
        {   
            id: {type:DataTypes.INTEGER, primaryKey:true,autoIncrement: true},
            date: DataTypes.DATE,
            tenant: DataTypes.INTEGER, 
            company: DataTypes.INTEGER,
            bu: DataTypes.STRING,
            total_inbound: DataTypes.BIGINT,
            total_outbound: DataTypes.BIGINT,
            total_queued: DataTypes.BIGINT,
            total_queue_dropped: DataTypes.BIGINT,
            total_queue_answered: DataTypes.BIGINT,
            total_outbound_answered: DataTypes.BIGINT,
            total_talktime_inbound: DataTypes.BIGINT,
            avg_talktime_inbound: DataTypes.BIGINT,
            holdtime_inbound: DataTypes.BIGINT,
            total_talktime_outbound: DataTypes.BIGINT,
            avg_talktime_outbound: DataTypes.BIGINT,
            holdtime_outbound: DataTypes.BIGINT,
            total_staff_count: DataTypes.BIGINT,
            total_staff_time: DataTypes.BIGINT,
            average_staff_time: DataTypes.BIGINT,
            total_acw_time: DataTypes.BIGINT,
            average_acw_time: DataTypes.BIGINT,
            total_break_time: DataTypes.BIGINT,
            average_inbound_calls_per_agent: DataTypes.NUMERIC,
            average_outbound_calls_per_agent: DataTypes.NUMERIC,
            total_idle_time: DataTypes.BIGINT
        }

    );


    return CallPerformanceTesting;
};