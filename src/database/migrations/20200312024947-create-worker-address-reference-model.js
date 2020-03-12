'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('workers', 'id_address', { 
      type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'addresses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workers');
  }

};