const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tags', {
    TagId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Questions',
        key: 'QuestionId'
      }
    }
  }, {
    sequelize,
    tableName: 'Tags',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_Tags_1",
        unique: true,
        fields: [
          { name: "TagId" },
        ]
      },
    ]
  });
};
