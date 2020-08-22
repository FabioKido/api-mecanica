'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const password = process.env.SEED_SUPERUSER_PASSWORD || 'admin';
    const date = new Date;

    return queryInterface.bulkInsert('users', [{
      username: 'emec_admin',
      email: 'admin@emecanica.com',
      password: password,
      type: 'Admin',
      role: 'super_admin',
      created_at: date,
      updated_at: date
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { email: 'admin@emecanica.com' }, {});
  }
};

// TODO Por o id do plano de acesso.
// Testar o Undo.