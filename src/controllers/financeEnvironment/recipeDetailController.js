const RecipeDetail = require('../../models/financeEntities/RecipeDetail');

exports.getRecipeDetails = async (req, res) => {
  const { id_recipe } = req.query;

  const recipe_details = await RecipeDetail.findAll({
    where: {
      id_recipe
    }
  });

  res.status(200).json({
    data: recipe_details
  });
}

exports.addRecipeDetail = async (req, res, next) => {
  try {
    const { id_recipe } = req.params;
    const {
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const recipe_detail = await RecipeDetail.create({
      id_recipe: id_recipe || null,
      id_payment_method: id_payment_method || null,
      id_account_destiny: id_account_destiny || null,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    });

    res.json({
      data: recipe_detail,
      message: "Detalhes da Receita cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateRecipeDetail = async (req, res, next) => {
  try {

    const { id_recipe_detail } = req.params;
    const {
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const recipe_detail = await RecipeDetail.update( {
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
     },
     {
      where: {
        id: id_recipe_detail
      }
    });

    res.json({
      data: recipe_detail,
      message: "Detalhes da Receita atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteRecipeDetail = async (req, res, next) => {
  try {

    const { id_recipe_detail } = req.params;

    RecipeDetail.destroy({
      where: {
        id: id_recipe_detail
      }
    })

    res.status(200).json({
      data: null,
      message: 'Detalhes da Receita foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
