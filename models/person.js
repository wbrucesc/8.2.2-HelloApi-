'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  });

  return Person;
};
