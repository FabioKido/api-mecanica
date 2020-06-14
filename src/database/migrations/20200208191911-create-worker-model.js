'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workers', { 
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
        type: Sequelize.DATEONLY,
        allowNull: true,
        get: function() {
          return moment.utc(this.getDataValue('birthday')).format('YYYY-MM-DD');
        }
      },
      orgao_expeditor: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      ctps: {
        type: Sequelize.STRING(13),
        allowNull: true,
      },
      salary_hour: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: true,
      },
      salary: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
        defaultValue: 0,
      },
      commission: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
        defaultValue: 0,
      },
      admission: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      admission_exam: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      next_exam: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      last_vacation: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      nest_vacation: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      rescission: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      rescission_exam: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      rescission_reason: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observations: {
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
    return queryInterface.dropTable('workers');
  }
};
