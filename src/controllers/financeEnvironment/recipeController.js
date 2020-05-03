const Recipe = require('../../models/financeEntities/Recipe');

exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.findAll();

  res.status(200).json({
    data: recipes
  });
}

exports.getRecipe = async (req, res, next) => {
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

exports.addRecipe = async (req, res, next) => {
  try {
    const {
      id_category,
      total_value,
      description,
      parcels,
      date,
      options,
      observations,
      enable
    } = req.body;

    const recipe = await Recipe.create({
      id_category: id_category || null,
      total_value,
      description,
      parcels,
      date,
      options,
      observations,
      enable,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: recipe,
      message: "Receita cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateRecipe = async (req, res, next) => {
  try {

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

    const recipe = await Recipe.update( {
      total_value,
      description,
      parcels,
      date,
      options,
      observations,
      enable
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

exports.deleteRecipe = async (req, res, next) => {
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
