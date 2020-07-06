const Recipe = require('../../models/financeEntities/Recipe');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const recipes = await Recipe.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      recipes
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_recipe } = req.params;

    const recipe = await Recipe.findByPk(id_recipe);

    if (!recipe) return next(new Error('Receita não existe'));

    res.status(200).json({
      data: recipe
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      id_category,
      id_payment,
      total_value,
      description,
      parcels,
      date,
      options,
      observations
    } = req.body;

    const recipe = await Recipe.create({
      id_category: id_category || null,
      id_payment: id_payment || null,
      total_value,
      description,
      parcels,
      date: date || Date.now(),
      options,
      observations,
      enable: true,
      created_by: userId
    });

    res.json({
      data: recipe,
      message: "Receita cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_recipe } = req.params;
    const {
      total_value,
      description,
      parcels,
      date,
      options,
      observations,
      enable
    } = req.body;

    const recipe = await Recipe.update({
      total_value,
      description,
      parcels,
      date,
      options,
      observations,
      enable,
      updated_by: userId
    },
      {
        where: {
          id: id_recipe
        }
      });

    res.json({
      data: recipe,
      message: "Receita atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_recipe } = req.params;

    Recipe.destroy({
      where: {
        id: id_recipe
      }
    })

    res.status(200).json({
      data: null,
      message: 'Receita foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
