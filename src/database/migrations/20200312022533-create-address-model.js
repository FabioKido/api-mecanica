'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('addresses');
  }
};
