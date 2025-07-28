module.exports = function (sequelize, DataTypes) {
    const WhatsappMessage = sequelize.define('social_chat_messages', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        wa_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'social_chat_sessions', // must match the actual table name
                key: 'wa_id'
            },
            onDelete: 'CASCADE'
        },
        session_id: DataTypes.STRING,
        message_id: {
            type: DataTypes.STRING,
            unique: true
        },
        sender: DataTypes.STRING,
        recipient: DataTypes.STRING,
        message: DataTypes.TEXT,
        data: DataTypes.TEXT,
        type: DataTypes.STRING,
        time_sent: DataTypes.TIME,
        uuid: DataTypes.STRING,
        status: DataTypes.STRING,
        created_at: DataTypes.DATE,
        current_chat_date: DataTypes.STRING
    });

    return WhatsappMessage;
};
