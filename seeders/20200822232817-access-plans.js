'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('access_plans', [
      {
        id: 1,
        name: 'MEI',
        type: 'basic',
        value: 0.00,
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        id: 2,
        name: 'MPE',
        type: 'elite',
        value: 32.00,
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        id: 3,
        name: 'MGE',
        type: 'preemium',
        value: 79.90,
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