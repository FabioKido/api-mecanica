const Diagnostic = require('../../models/serviceEntities/Diagnostic');

exports.index = async (req, res) => {
  const diagnostics = await Diagnostic.findAll();

  res.status(200).json({
    data: diagnostics
  });
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
    const { value, approved, observations } = req.body;

    const diagnostic = await Diagnostic.create({
      value,
      approved,
      observations,
      created_by: userId
    });

    res.json({
      data: diagnostic,
      message: "Diagnóstico do Veículo cadastrado com sucesso"
    })

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

    const diagnostic = await Diagnostic.update( {
      value,
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
