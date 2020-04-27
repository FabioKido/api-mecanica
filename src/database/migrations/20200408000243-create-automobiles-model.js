'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('automobiles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_vehicle: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'vehicles', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      board: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      motor: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      fuel: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      car_exchange: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      direction: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      doors: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      chassis: {
        type: Sequelize.STRING(17),
        allowNull: true,
      },
      renavam: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      ar: {
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
    return queryInterface.dropTable('automobiles');
  }
};
