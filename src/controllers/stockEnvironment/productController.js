const Product = require('../../models/stockEntities/Product');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const products = await Product.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      products
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_product } = req.params;
    const product = await Product.findByPk(id_product);
    if (!product) return next(new Error('Produto não existe'));
    res.status(200).json({
      data: product
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      id_family,
      nef_cod,
      name,
      location,
      ncm,
      unidade,
      unity_cost,
      min_qtd,
      price_sale,
      premium,
      commission,
      profit,
      km_limit,
      validity,
      origin_product,
      applications,
      observations,
      repos,
      image
    } = req.body;

    const product = await Product.create({
      id_family: id_family || null,
      nef_cod,
      name,
      location,
      ncm,
      unidade,
      unity_cost,
      min_qtd: min_qtd || 1,
      price_sale,
      premium: premium || 0,
      commission: commission || 0,
      profit: profit || 0,
      km_limit,
      validity: validity || Date.now(),
      origin_product,
      applications,
      observations,
      repos: repos || false,
      image,
      created_by: userId
    });

    res.json({
      data: product,
      message: "Produto cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_product } = req.params;
    const {
      id_family,
      image,
      nef_cod,
      name,
      location,
      ncm,
      unidade,
      unity_cost,
      min_qtd,
      price_sale,
      premium,
      commission,
      profit,
      km_limit,
      validity,
      origin_product,
      applications,
      observations,
      repos
    } = req.body;

    const product = await Product.update({
      id_family,
      image,
      nef_cod,
      name,
      location,
      ncm,
      unidade,
      unity_cost,
      min_qtd,
      price_sale,
      premium,
      commission,
      profit,
      km_limit,
      validity,
      origin_product,
      applications,
      observations,
      repos,
      updated_by: userId
    },
      {
        where: {
          id: id_product
        }
      });

    res.json({
      data: product,
      message: "Produto atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_product } = req.params;

    Product.destroy({
      where: {
        id: id_product
      }
    })

    res.status(200).json({
      data: null,
      message: 'Produto foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
