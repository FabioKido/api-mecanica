const ProductAcquisition = require('../../models/stockEntities/ProductAcquisition');

exports.show = async (req, res, next) => {
  try {
    const { id_prod_acq } = req.params;

    const prod_acq = await ProductAcquisition.findByPk(id_prod_acq, {
      include: { association: 'acquisition' }
    })

    if (!prod_acq) return next(new Error('Produto Adquirido não existe'));

    res.status(200).json({
      prod_acq
    });
  } catch (error) {
    next(error)
  }
}