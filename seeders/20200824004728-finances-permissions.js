'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Finanças',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Receitas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Receitas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Receitas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Receitas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Detalhes da Receita',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Detalhes da Receita',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Despesas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Despesas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Despesas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Despesas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Detalhes da Despesa',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Detalhes da Despesa',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Contas',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Contas',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Contas',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Contas',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Transferir',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Transferir',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Transferir',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Transferir',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Métodos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Métodos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Métodos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Métodos',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Categorias',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Categorias',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Categorias',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Finanças - Categorias',
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