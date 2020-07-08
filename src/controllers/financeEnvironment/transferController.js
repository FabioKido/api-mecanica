const Transfer = require('../../models/financeEntities/Transfer');

exports.index = async (req, res) => {
  try {
    const id_user = req.user;

    const transfers = await Transfer.findAll({
      where: {
        created_by: id_user
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
    const {
      id_category,
      id_account_origin,
      id_account_destiny,
      total_value,
      description,
      date,
      observations
    } = req.body;

    if ((id_account_origin === id_account_destiny) || !id_account_origin || !id_account_destiny) {

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
        created_by: userId
      });

      res.json({
        data: transfer,
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
