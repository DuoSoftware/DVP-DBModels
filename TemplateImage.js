
module.exports = function(sequelize, DataTypes) {
    var TemplateImage = sequelize.define('CSDB_TemplateImage', {
            Type: DataTypes.STRING
        }
    );

    return TemplateImage;
};

