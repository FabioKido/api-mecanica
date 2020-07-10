const Expense = require('../../models/financeEntities/Expense');
const ExpenseDetail = require('../../models/financeEntities/ExpenseDetail');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const expenses = await Expense.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      expenses
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_expense } = req.params;

    const expense = await Expense.findByPk(id_expense);

    if (!expense) return next(new Error('Despesa não existe'));

    res.status(200).json({
      data: expense
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      id_category,
      total_value,
      description,
      parcels,
      date,
      options,
      classification,
      observations
    } = req.body;

    const expense = await Expense.create({
      id_category: id_category || null,
      total_value,
      description,
      parcels,
      date: date || Date.now(),
      options,
      classification,
      observations,
      enable: true,
      created_by: userId
    });

    res.json({
      data: expense,
      message: "Despesa cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_expense } = req.params;
    const {
      id_category,
      total_value,
      description,
      date,
      classification,
      observations
    } = req.body;

    const expense_details = await ExpenseDetail.findAll({
      where: {
        id_expense
      }
    });

    const expense = await Expense.update({
      id_category: id_category || null,
      total_value,
      description,
      date,
      classification,
      observations,
      updated_by: userId
    },
      {
        where: {
          id: id_expense
        }
      });

    const { parcels } = await Expense.findByPk(id_expense);

    expense_details.map(expense_detail =>
      ExpenseDetail.update({
        value: (total_value / parcels) + Number(expense_detail.taxa_ajuste)
      },
        {
          where: {
            id: expense_detail.id
          }
        })
    )

    res.json({
      data: expense,
      message: "Despesa atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_expense } = req.params;

    Expense.destroy({
      where: {
        id: id_expense
      }
    })

    res.status(200).json({
      data: null,
      message: 'Despesa foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
