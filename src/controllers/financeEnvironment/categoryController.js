const Category = require('../../models/financeEntities/Category');

exports.getCategorys = async (req, res) => {
  const categorys = await Category.findAll();

  res.status(200).json({
    data: categorys
  });
}

exports.getCategory = async (req, res, next) => {
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

exports.addCategory = async (req, res, next) => {
  try {
    const {
      description,
      indicator
    } = req.body;

    const category = await Category.create({
      description,
      indicator,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: category,
      message: "Categoria cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateCategory = async (req, res, next) => {
  try {

    const { id_category } = req.params;
    const {
      description,
      indicator
    } = req.body;

    const category = await Category.update( {
      description,
      indicator
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

exports.deleteCategory = async (req, res, next) => {
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
