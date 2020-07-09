'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  team.associate = function(models) {
    // associations can be defined here
    models.team.belongsTo(models.user)
    models.team.belongsToMany(models.villain, {through: 'teamsVillains'})
  };
  return team;
};