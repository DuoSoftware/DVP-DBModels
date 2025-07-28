module.exports = function (sequelize, DataTypes) {
    const WhatsappSession = sequelize.define('social_chat_sessions', {
        wa_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        session_id: STRING,
        iss: DataTypes.STRING,
        iat: DataTypes.DATE,
        company: DataTypes.INTEGER,
        tenant: DataTypes.INTEGER,
        channel: DataTypes.STRING,
        jti: DataTypes.STRING,
        attributes: DataTypes.ARRAY(DataTypes.TEXT),
        priority: DataTypes.STRING,
        name: DataTypes.STRING,
        aud: DataTypes.STRING,
        secret: DataTypes.TEXT,
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        username: DataTypes.STRING,
        _id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        is_new_chat: DataTypes.BOOLEAN,
        chat_index: DataTypes.INTEGER,
        last_msg_receive: DataTypes.DATE,
        chat_count: DataTypes.INTEGER,
        is_chat_loading: DataTypes.BOOLEAN,
        window_min_option: DataTypes.BOOLEAN,
        position: DataTypes.STRING,
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return WhatsappSession;
};
