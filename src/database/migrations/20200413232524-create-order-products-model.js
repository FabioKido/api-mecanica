'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_order_service: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'order_services', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_provider: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'providers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      qtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      acquisition: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        get: function() {
          return moment.utc(this.getDataValue('acquisition')).format('YYYY-MM-DD');
        }
      },
      total_sale: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      unit_sale: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      unit_cost: {
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
    return queryInterface.dropTable('order_products');
  }
};
