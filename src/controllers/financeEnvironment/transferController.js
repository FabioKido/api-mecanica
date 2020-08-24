const Transfer = require('../../models/financeEntities/Transfer');
const Account = require('../../models/financeEntities/Account');

exports.index = async (req, res) => {
  try {
    const workshop = req.workshop;

    const transfers = await Transfer.findAll({
      where: {
        workshop: workshop
      }
    });

    res.status(200).json({
      transfers
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_transfer } = req.params;

    const transfer = await Transfer.findByPk(id_transfer);

    if (!transfer) return next(new Error('Transferência não existe'));

    res.status(200).json({
      data: transfer
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const workshop = req.workshop;
    const {
      id_category,
      id_account_origin,
      id_account_destiny,
      total_value,
      description,
      date,
      observations
    } = req.body;

    const account_origin = await Account.findByPk(id_account_origin);
    const { initial_value: origin_value } = account_origin;

    const account_destiny = await Account.findByPk(id_account_destiny);
    const { initial_value: destiny_value } = account_destiny;

    if ((id_account_origin === id_account_destiny) || !id_account_origin || !id_account_destiny || (Number(origin_value) < Number(total_value))) {

      return next(new Error('Verifique se as contas são diferentes entre si ou existam'));

    } else {
      const transfer = await Transfer.create({
        id_category: id_category || null,
        id_account_origin: id_account_origin || null,
        id_account_destiny: id_account_destiny || null,
        total_value,
        description,
        date: date || Date.now(),
        observations,
        enable: true,
        workshop: workshop,
        created_by: userId
      });

      res.json({
        transfer,
        origin_value,
        destiny_value,
        message: "Transferência cadastrada com sucesso"
      })
    }

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_transfer } = req.params;
    const {
      description,
      observations
    } = req.body;

    const transfer = await Transfer.update({
      description,
      observations,
      updated_by: userId
    },
      {
        where: {
          id: id_transfer
        }
      });

    res.json({
      data: transfer,
      message: "Transferência atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_transfer } = req.params;

    Transfer.destroy({
      where: {
        id: id_transfer
      }
    })

    res.status(200).json({
      data: null,
      message: 'Transferência foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
