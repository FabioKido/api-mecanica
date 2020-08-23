'use strict';

const bcrypt = require('bcrypt');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const password = process.env.SEED_SUPERUSER_PASSWORD || 'admin';
    const hashedPassword = await hashPassword(password);
    const date = new Date;

    return queryInterface.bulkInsert('users', [{
      username: 'emec_admin',
      email: 'admin@emecanica.com',
      password: hashedPassword,
      type: 'Admin',
      role: 'super_admin',
      workshop: 'admin@emecanica.com',
      created_at: date,
      updated_at: date
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { email: 'admin@emecanica.com' }, {});
  }
};

// TODO o ENV não tá funcionando.
// Testar o Undo.