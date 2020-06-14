'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('acquisitions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_provider: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'providers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
      total_qtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nef_key: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nef_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      approved: {
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('acquisitions');
  }
};
