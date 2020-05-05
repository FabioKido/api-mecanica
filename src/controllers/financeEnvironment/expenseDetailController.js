const ExpenseDetail = require('../../models/financeEntities/ExpenseDetail');

exports.index = async (req, res) => {
  const { id_expense } = req.query;

  const expense_details = await ExpenseDetail.findAll({
    where: {
      id_expense
    }
  });

  res.status(200).json({
    data: expense_details
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
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    });

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
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const expense_detail = await ExpenseDetail.update( {
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
