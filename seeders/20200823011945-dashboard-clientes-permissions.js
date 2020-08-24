'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Dashboard',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Clientes',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Clientes',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Clientes',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Clientes',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Veículos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Veículos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Veículos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Clientes - Veículos',
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
  Permissões


  --- Dashboard: SUP, UAD, UBC[Visualizar]


  --- Clientes: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Clientes:  Criar, Viasualizar, Editar, Excluir

    -- Veículos:  Criar, Viasualizar, Editar, Excluir


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


  --- Serviços: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Ordens:  Criar, Viasualizar, Editar, Excluir

      - Serviços/Detalhes:  Viasualizar, Editar

      - Produtos/Detalhes:  Criar, Viasualizar, Editar, Excluir

      - Pagamentos: Criar, Viasualizar, Editar, Excluir

      - Parcelas: Viasualizar, Editar

      - Timelines:  Criar, Viasualizar, Editar, Excluir

    -- Rápidas:  Criar, Viasualizar, Excluir

    -- Orçar/Diagnósticos:  Criar, Viasualizar, Editar, Excluir

      - Checklists: Criar, Viasualizar, Editar, Excluir

    -- Revisões/Preventivas:  Criar, Viasualizar, Editar, Excluir

    -- Agendar: Criar, Viasualizar, Editar, Excluir

    -- Seviços: Criar, Viasualizar


  --- Aquisições: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Aquisições:  Criar, Viasualizar, Editar, Excluir

    -- Produtos:  Criar, Viasualizar, Editar, Excluir

    -- Fornecedores:  Criar, Viasualizar, Editar, Excluir

    -- Famílias:  Criar, Viasualizar, Editar, Excluir


  --- Colaboradores/RH: SUP, UAD


  --- Configurações: SUP, UAD


  Permissões de Tipo de Usuário

  --- Funcionário/user_basic: UBC

  --- Dono/user_admin: UAD

  --- Administrador/super_user: SUP

*/