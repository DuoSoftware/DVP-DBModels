/**
 * Created by dinusha on 9/23/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var TicketData = sequelize.define('CSDB_TicketData', {
            _id: {type:DataTypes.STRING, primaryKey:true},
            requester: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            subject: DataTypes.STRING,
            submitter: DataTypes.STRING,
            company: DataTypes.INTEGER,
            tenant: DataTypes.INTEGER,
            channel: DataTypes.STRING,
            SLAViolated: DataTypes.BOOLEAN,
            assignee: DataTypes.STRING,
            tags: DataTypes.STRING,
            status: DataTypes.STRING,
            priority: DataTypes.STRING,
            type: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            reference: DataTypes.STRING

        }
    );


    return Context;
};
