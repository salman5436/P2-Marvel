'use strict';
module.exports = (sequelize, DataTypes) => {
  const fight = sequelize.define('fight', {
    teamId: DataTypes.INTEGER,
    villainId: DataTypes.INTEGER,
    heroPoints: DataTypes.INTEGER,
    villainPoints: DataTypes.INTEGER
  }, {});
  fight.associate = function(models) {
    // associations can be defined here
  };
  return fight;
};