'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Finanças - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Receitas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Receitas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Receitas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Receitas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Detalhes da Receita',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Detalhes da Receita',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Despesas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Despesas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Despesas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Despesas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Detalhes da Despesa',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Detalhes da Despesa',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Contas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Contas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Contas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Contas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Transferir',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Transferir',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Transferir',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Transferir',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Métodos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Métodos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Métodos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Métodos',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Categorias',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Categorias',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Categorias',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Categorias',
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
  --- Finanças: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Receitas: Criar, Viasualizar, Editar, Excluir

      - Detalhes/Parcelas:  Viasualizar, Editar

    -- Despesas: Criar, Viasualizar, Editar, Excluir

      - Detalhes/Parcelas:  Viasualizar, Editar

    -- Contas:  Criar, Viasualizar, Editar, Excluir

    -- Transferir:  Criar, Viasualizar, Editar, Excluir

    -- Métodos: Criar, Viasualizar, Editar, Excluir

    -- Categorias:  Criar, Viasualizar, Editar, Excluir

*/