'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_acquisitions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_acquisition: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'families', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unity_cost: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      discount: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_acquisitions');
  }
};
