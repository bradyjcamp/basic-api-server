'use-strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vehicles', {
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};