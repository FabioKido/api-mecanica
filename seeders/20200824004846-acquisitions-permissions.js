'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Aquisições',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Aquisições',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Aquisições',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Aquisições',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Aquisições',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Produtos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Produtos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Produtos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Produtos',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Fornecedores',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Fornecedores',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Fornecedores',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Fornecedores',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Famílias',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Famílias',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Famílias',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições - Famílias',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', {});
  }
};

/*
  --- Aquisições: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Aquisições:  Criar, Viasualizar, Editar, Excluir

    -- Produtos:  Criar, Viasualizar, Editar, Excluir

    -- Fornecedores:  Criar, Viasualizar, Editar, Excluir

    -- Famílias:  Criar, Viasualizar, Editar, Excluir

*/