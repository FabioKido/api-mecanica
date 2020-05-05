const Acquisition = require('../../models/stockEntities/Acquisition');
const ProductAcquisition = require('../../models/stockEntities/ProductAcquisition');

exports.index = async (req, res, next) => {
  const acquisitions = await Acquisition.findAll();
  res.status(200).json({
    data: acquisitions
  });
}

exports.show = async (req, res, next) => {
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
exports.store = async (req, res, next) => {
  try {
    const {
      id_provider,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved,
      qtd,
      unity_cost,
      discount,
      id_product
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

    const productAcquisition = await ProductAcquisition.create({
      id_product,
      id_acquisition: acq.id,
      qtd,
      unity_cost,
      discount,
    });

    res.json({
      data: { acq, productAcquisition },
      message: "Aquisição cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const { id_acquisition } = req.params;
    const {
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved
    } = req.body;

    const acq = await Acquisition.update( {
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved
     },
     {
      where: {
        id: id_acquisition
      }
    });

    res.json({
      data: acq,
      message: "Aquisição atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_acquisition } = req.params;

    Acquisition.destroy({
      where: {
        id: id_acquisition
      }
    })

    res.status(200).json({
      data: null,
      message: 'Aquisição foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
