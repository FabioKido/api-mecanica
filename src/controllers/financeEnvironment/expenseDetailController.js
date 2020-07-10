const ExpenseDetail = require('../../models/financeEntities/ExpenseDetail');
const Expense = require('../../models/financeEntities/Expense');

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
      total_value: Number(total_value) + (Number(taxa_ajuste) || 0)
    },
      {
        where: {
          id: id_expense
        }
      })

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

    const { id_expense } = req.query;
    const { id_expense_detail } = req.params;
    const {
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out,
      taxa_ant
    } = req.body;

    const expense_detail = await ExpenseDetail.update({
      id_payment_method: id_payment_method || null,
      id_account_destiny: id_account_destiny || null,
      value,
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

    const { total_value } = await Expense.findByPk(id_expense);

    const total = taxa_ajuste ? (Number(total_value) - Number(taxa_ant)) : Number(total_value);

    Expense.update({
      total_value: total + (Number(taxa_ajuste) || 0)
    },
      {
        where: {
          id: id_expense
        }
      })

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
