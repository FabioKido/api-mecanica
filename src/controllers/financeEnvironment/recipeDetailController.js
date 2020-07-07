const RecipeDetail = require('../../models/financeEntities/RecipeDetail');

exports.index = async (req, res) => {
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

exports.store = async (req, res, next) => {
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
      vencimento: vencimento || Date.now(),
      document_number,
      taxa_ajuste,
      observations,
      paid_out: paid_out || false
    });

    res.json({
      data: recipe_detail,
      message: "Detalhes da Receita cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
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

    const recipe_detail = await RecipeDetail.update({
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

exports.destroy = async (req, res, next) => {
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
