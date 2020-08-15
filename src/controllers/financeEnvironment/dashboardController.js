const Account = require('../../models/financeEntities/Account');
const RecipeDetail = require('../../models/financeEntities/RecipeDetail');
const ExpenseDetail = require('../../models/financeEntities/ExpenseDetail');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;
    let expenses;
    let recipes;
    let account_total;

    // TODO Colocar os Wheres para pegar da id de uma oficina;
    const res_exp = await ExpenseDetail.findAll();
    const res_rec = await RecipeDetail.findAll();
    const res_acc = await Account.findAll({
      where: {
        created_by: id_user
      }
    });

    const getNotPaids = (item) => item.paid_out !== true;
    const soma = (acumulador, total) => Number(total) + Number(acumulador);

    if (res_exp.length === 0) {
      expenses = [];
    } else {
      expenses = res_exp.filter(getNotPaids);
    }

    if (res_rec.length === 0) {
      recipes = [];
    } else {
      recipes = res_rec.filter(getNotPaids);
    }

    if (res_acc.length === 0) {
      account_total = 0.00;
    } else {
      account_total = res_acc
        .map(acc => acc.initial_value)
        .reduce(soma);
    }

    res.status(200).json({
      expenses, recipes, account_total
    });
  } catch (error) {
    next(error)
  }
}