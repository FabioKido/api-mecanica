'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_family: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'families', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nef_cod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ncm: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      unidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unity_cost: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      min_qtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_sale: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      premium: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      commission: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      profit: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      km_limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      validity: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        get: function () {
          return moment.utc(this.getDataValue('validity')).format('YYYY-MM-DD');
        }
      },
      origin_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      applications: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observations: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      repos: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      workshop: {
        type: Sequelize.STRING,
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
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
