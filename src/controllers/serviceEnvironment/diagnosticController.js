const Diagnostic = require('../../models/serviceEntities/Diagnostic');

exports.index = async (req, res, next) => {
  try {
    const workshop = req.workshop;

    const diagnostics = await Diagnostic.findAll({
      where: {
        workshop: workshop
      }
    });

    res.status(200).json({
      diagnostics
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_diagnostic } = req.params;

    const diagnostic = await Diagnostic.findByPk(id_diagnostic);

    if (!diagnostic) return next(new Error('Diagnóstico do Veículo não existe'));

    res.status(200).json({
      data: diagnostic
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const workshop = req.workshop;
    const { value, approved, observations, id_vehicle } = req.body;

    const { id: diagnostic } = await Diagnostic.create({
      value: value || 0,
      approved,
      observations,
      id_vehicle,
      workshop: workshop,
      created_by: userId
    });

    res.json({
      diagnostic,
      message: "Diagnóstico do Veículo cadastrado com sucesso"
    });

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_diagnostic } = req.params;
    const {
      value,
      approved,
      observations
    } = req.body;

    const diagnostic = await Diagnostic.update({
      value: value || 0,
      approved,
      observations,
      updated_by: userId
    },
      {
        where: {
          id: id_diagnostic
        }
      });

    res.json({
      data: diagnostic,
      message: "Diagnóstico do Veículo atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_diagnostic } = req.params;

    Diagnostic.destroy({
      where: {
        id: id_diagnostic
      }
    })

    res.status(200).json({
      data: null,
      message: 'Diagnóstico do Veículo foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
