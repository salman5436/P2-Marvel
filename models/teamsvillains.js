'use strict';
module.exports = (sequelize, DataTypes) => {
  const teamsVillains = sequelize.define('teamsVillains', {
    teamId: DataTypes.INTEGER,
    villainId: DataTypes.INTEGER,
    heroPoints: DataTypes.INTEGER,
    villainPoints: DataTypes.INTEGER
  }, {});
  teamsVillains.associate = function(models) {
    // associations can be defined here
    
  };
  return teamsVillains;
};