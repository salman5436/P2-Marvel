'use strict';
module.exports = (sequelize, DataTypes) => {
  const villain = sequelize.define('villain', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  villain.associate = function(models) {
    // associations can be defined here
    models.villain.belongsTo(models.user)
  };
  return villain;
};