'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const date = new Date;

    return queryInterface.bulkInsert('permissions', [
      {
        name: 'Serviços - Visão',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Serviços',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Serviços',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Ordens',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Ordens',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Ordens',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Ordens',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Serviços da Ordem',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Serviços da Ordem',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos do Serviço',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos do Serviço',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos do Serviço',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Produtos do Serviço',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Pagamentos',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Pagamentos',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Pagamentos',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Pagamentos',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Parcelas do Pagamento',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Parcelas do Pagamento',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Timeline',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Timeline',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Timeline',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Timeline',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Orçar',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Orçar',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Orçar',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Orçar',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Checklist',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Checklist',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Checklist',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Itens da Checklist',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisões',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisões',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisões',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Revisões',
        action: 'Excluir',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Agendar',
        action: 'Visualizar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Agendar',
        action: 'Criar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Agendar',
        action: 'Editar',
        enable: true,
        created_at: date,
        updated_at: date
      },
      {
        name: 'Agendar',
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
  --- Serviços: SUP, UAD, UBC[Visualizar]

    -- Visão: Viasualizar

    -- Ordens:  Criar, Viasualizar, Editar, Excluir

      - Serviços/Detalhes:  Viasualizar, Editar

      - Produtos/Detalhes:  Criar, Viasualizar, Editar, Excluir

      - Pagamentos: Criar, Viasualizar, Editar, Excluir

      - Parcelas: Viasualizar, Editar

      - Timelines:  Viasualizar

          Timelines/Detalhes: Criar, Viasualizar, Editar, Excluir

    -- Rápidas:  Criar, Viasualizar, Excluir

    -- Orçar/Diagnósticos:  Criar, Viasualizar, Editar, Excluir

      - Checklists: Viasualizar

          Checklists/Detalhes: Criar, Viasualizar, Editar, Excluir

    -- Revisões/Preventivas:  Criar, Viasualizar, Editar, Excluir

    -- Agendar: Criar, Viasualizar, Editar, Excluir

    -- Serviços: Criar, Viasualizar

*/