'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('access_plans', [
      {
        name: 'Individual',
        type: 'basic',
        value: 0.00,
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'MPE',
        type: 'elite',
        value: 22.00,
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Média',
        type: 'elite',
        value: 59.00,
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Grande',
        type: 'preemium',
        value: 97.00,
        enable: true,
        created_at: date,
        updated_at: date
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('access_plans', {});
  }
};