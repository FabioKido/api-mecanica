const Acquisition = require('../../models/stockEntities/Acquisition');
const ProductAcquisition = require('../../models/stockEntities/ProductAcquisition');

exports.index = async (req, res, next) => {
  try {
    const workshop = req.workshop;

    const acquisitions = await Acquisition.findAll({
      where: {
        workshop: workshop
      }
    });

    res.status(200).json({
      acquisitions
    });
  } catch (error) {
    next(error)
  }
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

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      id_provider,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved,
      unity_cost,
      discount,
      id_product
    } = req.body;

    const acq = await Acquisition.create({
      id_provider: id_provider || null,
      acquisition: acquisition || Date.now(),
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved: approved || false,
      created_by: userId
    });

    const { id: product_acquisition } = await ProductAcquisition.create({
      id_product: id_product || null,
      id_acquisition: acq.id,
      qtd: total_qtd,
      unity_cost,
      discount: discount || 0
    });

    res.json({
      acq,
      product_acquisition,
      message: "Aquisição cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_acquisition } = req.params;
    const {
      id_provider,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved,
      unity_cost,
      discount,
      id_prod_acq
    } = req.body;

    const acq = await Acquisition.update({
      id_provider: id_provider || null,
      acquisition,
      total_sale,
      total_qtd,
      nef_key,
      nef_number,
      approved,
      updated_by: userId
    },
      {
        where: {
          id: id_acquisition
        }
      });

    // TODO quem sabe adiciono poder atualizar o produto.
    await ProductAcquisition.update({
      qtd: total_qtd,
      unity_cost,
      discount: discount || 0
    },
      {
        where: {
          id: id_prod_acq
        }
      });

    res.json({
      acq,
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
