/**
 * Created by a on 1/29/2015.
 */

module.exports = function(sequelize, DataTypes) {
    var HangupCause = sequelize.define('CSDB_HangupCauses', {
            ItutQ850Code: DataTypes.INTEGER,
            SipEquiv: DataTypes.INTEGER,
            Enumeration: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            Cause: DataTypes.STRING,
            Description: DataTypes.TEXT
        }
    );

    return HangupCause;
};

