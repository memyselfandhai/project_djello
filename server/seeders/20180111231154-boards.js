"use strict";
var models = require("./../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let boards = [{ title: "grocery list" }, { title: "world domination" }];

    return queryInterface.bulkInsert("Boards", boards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
