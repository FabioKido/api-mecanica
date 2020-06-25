'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('vehicles', 'type', {
      type: Sequelize.STRING(10),
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles');
  }

};
