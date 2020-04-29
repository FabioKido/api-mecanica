const Record = require('../../models/serviceEntities/Record');

exports.getRecords = async (req, res) => {
  const records = await Record.findAll();

  res.status(200).json({
    data: records
  });
}

exports.getRecord = async (req, res, next) => {
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

exports.addRecord = async (req, res, next) => {
  try {
    const { audio } = req.body;

    const record = await Record.create({
      audio,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: record,
      message: "Registro Rápido cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteRecord = async (req, res, next) => {
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
