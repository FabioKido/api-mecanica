const RecipeDetail = require('../../models/financeEntities/RecipeDetail');
const Recipe = require('../../models/financeEntities/Recipe');

exports.index = async (req, res) => {
  const { id_recipe } = req.query;

  const recipe_details = await RecipeDetail.findAll({
    where: {
      id_recipe
    }
  });

  res.status(200).json({
    recipe_details
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

    const { total_value } = await Recipe.findByPk(id_recipe);

    Recipe.update({
      total_value: Number(total_value) + (Number(taxa_ajuste) || 0)
    },
      {
        where: {
          id: id_recipe
        }
      })

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
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out,
      taxa_ant
    } = req.body;

    const new_value = taxa_ajuste !== taxa_ant ? (Number(value) - Number(taxa_ant)) + Number(taxa_ajuste) : value;

    const recipe_detail = await RecipeDetail.update({
      id_payment_method: id_payment_method || null,
      id_account_destiny: id_account_destiny || null,
      value: new_value,
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
