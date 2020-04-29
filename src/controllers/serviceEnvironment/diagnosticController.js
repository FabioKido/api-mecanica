const Diagnostic = require('../../models/serviceEntities/Diagnostic');

exports.getDiagnostics = async (req, res) => {
  const diagnostics = await Diagnostic.findAll();

  res.status(200).json({
    data: diagnostics
  });
}

exports.getDiagnostic = async (req, res, next) => {
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

exports.addDiagnostic = async (req, res, next) => {
  try {
    const { value, approved } = req.body;
    const { id_checklist } = req.params;

    const diagnostic = await Diagnostic.create({
      id_checklist: id_checklist || null,
      value,
      approved,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: diagnostic,
      message: "Diagnóstico do Veículo cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateDiagnostic = async (req, res, next) => {
  try {

    const { id_diagnostic } = req.params;
    const {
      value,
      approved
    } = req.body;

    const diagnostic = await Diagnostic.update( {
      value,
      approved
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

exports.deleteDiagnostic = async (req, res, next) => {
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
