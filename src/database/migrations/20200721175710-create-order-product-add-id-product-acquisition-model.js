'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('order_products', 'id_prod_acq', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'product_acquisitions', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_products');
  }

};