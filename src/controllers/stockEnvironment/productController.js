const Product = require('../../models/stockEntities/Product');

exports.getProducts = async (req, res, next) => {
  const products = await Product.findAll();
  res.status(200).json({
    data: products
  });
}

exports.getProduct = async (req, res, next) => {
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

exports.addProduct = async (req, res, next) => {
  try {
    const {
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
      id_family
    } = req.body;

    const product = await Product.create({
      id_family: id_family || null,
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
      created_by: null,
      updated_by: null,
    });

    res.json({
      data: product,
      message: "Produto cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.updateProduct = async (req, res, next) => {
  try {

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

    const product = await Product.update( {
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

exports.deleteProduct = async (req, res, next) => {
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
