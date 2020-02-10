'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('owners', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: true,
      },
      rg: {
        type: Sequelize.STRING(14),
        allowNull: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      orgao_expeditor: {
        type: Sequelize.STRING(30),
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
    return queryInterface.dropTable('owners');
  }
};
