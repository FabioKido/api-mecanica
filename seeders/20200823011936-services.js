'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('services', [
      {
        name: 'Colar Pneu',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Trocar Óleo',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Desempenar o Aro',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Troca dos Discos de Freio',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Higienização Interna',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Martelinho de Ouro',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Balanceamento',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisão Preventiva',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Alinhamento',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Funilaria/Pintura',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Troca de Pneus',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Troca das Pastilhas',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Polimento',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Instalação de Película',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Lavagem Automotiva',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Troca do Kit',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisão da Parte Elétrica',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisão dos Filtros de Ar',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Consertar Corrente',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Reparos Gerais',
        created_at: date,
        updated_at: date
      },
      {
        name: 'Checar Água do Radiador',
        created_at: date,
        updated_at: date
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', {});
  }
};