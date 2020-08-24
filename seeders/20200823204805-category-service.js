'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('categories', [
      {
        description: 'Serviços',
        indicator: 'Normal',
        workshop: 'admin@emecanica.com',
        created_at: date,
        updated_at: date
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', {});
  }
};