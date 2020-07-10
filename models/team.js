'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    heroPoints: DataTypes.INTEGER
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};