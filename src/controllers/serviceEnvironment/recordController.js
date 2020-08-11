const Record = require('../../models/serviceEntities/Record');

exports.index = async (req, res) => {
  try {
    const id_user = req.user;

    const records = await Record.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      records
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_record } = req.params;

    const record = await Record.findByPk(id_record);

    if (!record) return next(new Error('Registro Rápido não existe'));

    res.status(200).json({
      data: record
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const { audio } = req.body;

    const record = await Record.create({
      audio,
      created_by: userId
    });

    res.json({
      data: record,
      message: "Registro Rápido cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_record } = req.params;

    Record.destroy({
      where: {
        id: id_record
      }
    })

    res.status(200).json({
      data: null,
      message: 'Registro Rápido foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
