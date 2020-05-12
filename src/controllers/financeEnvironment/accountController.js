const Account = require('../../models/financeEntities/Account');

exports.index = async (req, res) => {
  const accounts = await Account.findAll();

  res.status(200).json({
    data: accounts
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_account } = req.params;

    const account = await Account.findByPk(id_account);

    if (!account) return next(new Error('Conta Bancária não existe'));

    res.status(200).json({
      data: account
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user.id;
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
    const userId = req.user.id;
    const { id_account } = req.params;
    const {
      title,
      type,
      description,
      initial_value
    } = req.body;

    const account = await Account.update( {
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
