const ExpenseDetail = require('../../models/financeEntities/ExpenseDetail');
const Expense = require('../../models/financeEntities/Expense');
const Account = require('../../models/financeEntities/Account');

exports.index = async (req, res) => {
  const { id_expense } = req.query;

  const expense_details = await ExpenseDetail.findAll({
    where: {
      id_expense
    }
  });

  res.status(200).json({
    expense_details
  });
}

exports.store = async (req, res, next) => {
  try {
    const { id_expense } = req.params;
    const {
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const expense_detail = await ExpenseDetail.create({
      id_expense: id_expense || null,
      id_payment_method: id_payment_method || null,
      id_account_destiny: id_account_destiny || null,
      value,
      vencimento: vencimento || Date.now(),
      document_number,
      taxa_ajuste,
      observations,
      paid_out: paid_out || false
    });

    const { total_value } = await Expense.findByPk(id_expense);

    Expense.update({
      total_value: Number(total_value) - (Number(taxa_ajuste) || 0)
    },
      {
        where: {
          id: id_expense
        }
      })

    const { initial_value } = await Account.findByPk(id_account_destiny);

    if (paid_out && id_account_destiny) {
      Account.update({
        initial_value: Number(initial_value) - Number(value)
      },
        {
          where: {
            id: id_account_destiny
          }
        })
    }

    res.json({
      data: expense_detail,
      message: "Detalhes da Despesa cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const { id_expense_detail } = req.params;
    const {
      id_expense,
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out,
      taxa_ant,
      value_ant,
      paid_ant
    } = req.body;

    let new_value;

    if (Number(taxa_ajuste) !== Number(taxa_ant)) {
      if (Number(value) !== Number(value_ant)) {
        new_value = Number(value) - Number(taxa_ajuste);
      } else {
        new_value = (Number(value) + Number(taxa_ant)) - Number(taxa_ajuste);
      }
    } else if (Number(value) !== Number(value_ant) && Number(taxa_ajuste) === Number(taxa_ant)) {
      new_value = Number(value) - Number(taxa_ajuste);
    } else {
      new_value = value;
    };

    const expense_detail = await ExpenseDetail.update({
      id_payment_method: id_payment_method || null,
      id_account_destiny: id_account_destiny || null,
      value: new_value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    },
      {
        where: {
          id: id_expense_detail
        }
      });

    if (paid_out !== paid_ant && Number(new_value) === Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: Number(initial_value) - Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      } else {
        Account.update({
          initial_value: Number(initial_value) + Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }
    }

    if (paid_out !== paid_ant && Number(new_value) !== Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: Number(initial_value) - Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      } else {
        Account.update({
          initial_value: Number(initial_value) + Number(value_ant)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }
    }

    if (paid_out === paid_ant && Number(new_value) !== Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: (Number(initial_value) + Number(value_ant)) - Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }

    }

    // Expense.update({
    //   total_value: new_value
    // },
    //   {
    //     where: {
    //       id: id_expense
    //     }
    //   })

    res.json({
      data: expense_detail,
      message: "Detalhes da Despesa atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_expense_detail } = req.params;

    ExpenseDetail.destroy({
      where: {
        id: id_expense_detail
      }
    })

    res.status(200).json({
      data: null,
      message: 'Detalhes da Despesa foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
