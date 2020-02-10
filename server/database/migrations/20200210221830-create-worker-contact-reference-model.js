'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('workers', 'id_contact', { 
      type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'contacts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workers');
  }

};