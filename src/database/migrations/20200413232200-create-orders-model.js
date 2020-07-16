'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_vehicle: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'vehicles', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_diagnostic: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'diagnostics', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_schedule: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'schedules', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_preventive: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'preventives', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_record: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'records', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      km: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      tanque: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      internal_control: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      prevision_exit: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        get: function () {
          return moment.utc(this.getDataValue('prevision_exit')).format('YYYY-MM-DD');
        }
      },
      observations: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      active: {
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
    return queryInterface.dropTable('orders');
  }
};
