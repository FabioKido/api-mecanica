'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Aquisições - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Aquisições',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Fornecedores',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Fornecedores',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Fornecedores',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Fornecedores',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Famílias',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Famílias',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Famílias',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Famílias',
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