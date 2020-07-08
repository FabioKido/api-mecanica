const Account = require('../../models/financeEntities/Account');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const accounts = await Account.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      accounts
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_account } = req.params;

    const account = await Account.findByPk(id_account);

    if (!account) return next(new Error('Conta Bancária não existe'));

    res.status(200).json({
      account
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      title,
      type,
      description,
      initial_value
    } = req.body;

    const account = await Account.create({
      title,
      type,
      description,
      initial_value,
      created_by: userId
    });

    res.json({
      data: account,
      message: "Conta Bancária cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_account } = req.params;
    const {
      title,
      type,
      description,
      initial_value
    } = req.body;

    const account = await Account.update({
      title,
      type,
      description,
      initial_value,
      updated_by: userId
    },
      {
        where: {
          id: id_account
        }
      });

    res.json({
      data: account,
      message: "Conta Bancária atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_account } = req.params;

    Account.destroy({
      where: {
        id: id_account
      }
    })

    res.status(200).json({
      data: null,
      message: 'Conta Bancária foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
