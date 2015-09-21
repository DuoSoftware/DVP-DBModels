module.exports = function(sequelize, DataTypes) {
    var SwarmDockerEnvVariable = sequelize.define('CSDB_SwarmDockerEnvVariable', {
            EnvName: DataTypes.STRING,
            EnvValue: DataTypes.STRING,
            IsExport: DataTypes.BOOLEAN
        }
    );


    return SwarmDockerEnvVariable;
};