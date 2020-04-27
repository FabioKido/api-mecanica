const Acquisition = require('../../models/stockEntities/Acquisition');

exports.getAcquisitions = async (req, res, next) => {
  const acquisitions = await Acquisition.findAll();
  res.status(200).json({
    data: acquisitions
  });
}

exports.getAcquisition = async (req, res, next) => {
  try {
    const { id_acquisition } = req.params;
    const acquisition = await Acquisition.findByPk(id_acquisition);
    if (!acquisition) return next(new Error('Aquisição não existe'));
    res.status(200).json({
      data: acquisition
    });
  } catch (error) {
    next(error)
  }
}

// Fazer separados mesmo:
// Se o produto for novo, salva ele e pode criar uma aquisição(compra) para melhor registrá-lo... ou não!
// Se o produto ja existir e irmos na página de edição/visualização dele, pode se então, criar uma aquisição nova pra ele.
exports.addAcquisition = async (req, res, next) => {
  try {
    const {
      id_provider,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved
    } = req.body;

    const acq = await Acquisition.create({
      id_provider: id_provider || null,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved,
      created_by: null,
      updated_by: null,
    });

    res.json({
      data: acq,
      message: "Aquisição cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}
