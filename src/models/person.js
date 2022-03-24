'use-strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};