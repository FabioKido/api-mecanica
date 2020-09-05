const ProductAcquisition = require('../../models/stockEntities/ProductAcquisition');

exports.show = async (req, res, next) => {
  try {
    const { id_acquisition } = req.params;

    const prod_acq = await ProductAcquisition.findOne({
      where: {
        id_acquisition
      }
    });

    if (!prod_acq) return next(new Error('Produto Adquirido não existe'));

    res.status(200).json({
      prod_acq
    });
  } catch (error) {
    next(error)
  }
}

exports.index = async (req, res, next) => {
  try {
    const { id_product } = req.params;

    const acqs = await ProductAcquisition.findAll({
      where: {
        id_product
      }
    });

    const getProds = item => item.qtd !== 0;

    const prod_acqs = acqs.filter(getProds);

    res.status(200).json({
      prod_acqs
    });

  } catch (error) {
    next(error)
  }
}