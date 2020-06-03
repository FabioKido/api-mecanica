const Category = require('../../models/financeEntities/Category');

exports.index = async (req, res) => {
  const categorys = await Category.findAll();

  res.status(200).json({
    data: categorys
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_category } = req.params;

    const category = await Category.findByPk(id_category);

    if (!category) return next(new Error('Categoria não existe'));

    res.status(200).json({
      data: category
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      description,
      indicator
    } = req.body;

    const category = await Category.create({
      description,
      indicator,
      created_by: userId
    });

    res.json({
      data: category,
      message: "Categoria cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_category } = req.params;
    const {
      description,
      indicator
    } = req.body;

    const category = await Category.update( {
      description,
      indicator,
      updated_by: userId
     },
     {
      where: {
        id: id_category
      }
    });

    res.json({
      data: category,
      message: "Categoria atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_category } = req.params;

    Category.destroy({
      where: {
        id: id_category
      }
    })

    res.status(200).json({
      data: null,
      message: 'Categoria foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
