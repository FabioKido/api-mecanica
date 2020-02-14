'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('resources', 'id_access_plan', { 
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'access_plans', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resources');
  }

};