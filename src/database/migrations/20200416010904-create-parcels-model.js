'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parcels', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_payment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'payments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_payment_method: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'payment_methods', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_bank_account: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'accounts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      value: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      vencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        get: function() {
          return moment.utc(this.getDataValue('vencimento')).format('YYYY-MM-DD');
        }
      },
      document_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      taxa_ajuste: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      observations: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paid_out: {
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parcels');
  }
};
