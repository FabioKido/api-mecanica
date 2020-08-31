const RecipeDetail = require('../../models/financeEntities/RecipeDetail');
const Recipe = require('../../models/financeEntities/Recipe');
const Account = require('../../models/financeEntities/Account');
const Parcel = require('../../models/serviceEntities/Parcel');

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
      total_value: Number(total_value) - (Number(taxa_ajuste) || 0)
    },
      {
        where: {
          id: id_recipe
        }
      })

    const { initial_value } = await Account.findByPk(id_account_destiny);

    if (paid_out && id_account_destiny) {
      Account.update({
        initial_value: Number(initial_value) + Number(value)
      },
        {
          where: {
            id: id_account_destiny
          }
        })
    }

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
      id_recipe,
      id_payment_method,
      id_account_destiny,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out,
      taxa_ant,
      value_ant,
      paid_ant
    } = req.body;

    let new_value;

    if (Number(taxa_ajuste) !== Number(taxa_ant)) {
      if (Number(value) !== Number(value_ant)) {
        new_value = Number(value) - Number(taxa_ajuste);
      } else {
        new_value = (Number(value) + Number(taxa_ant)) - Number(taxa_ajuste);
      }
    } else if (Number(value) !== Number(value_ant) && Number(taxa_ajuste) === Number(taxa_ant)) {
      new_value = Number(value) - Number(taxa_ajuste);
    } else {
      new_value = value;
    };

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

    const { id_payment } = await Recipe.findByPk(id_recipe);

    if (id_payment) {
      const parcels = await Parcel.findAll({
        where: {
          id_payment
        }
      });

      const valuesEquals = item => item.document_number === document_number;

      const parcel = parcels.filter(valuesEquals);

      await Parcel.update({
        id_payment_method: id_payment_method || null,
        id_bank_account: id_account_destiny || null,
        value: new_value,
        vencimento,
        document_number,
        taxa_ajuste,
        observations,
        paid_out
      },
        {
          where: {
            id: parcel[0].id
          }
        });
    }

    if (paid_out !== paid_ant && Number(new_value) === Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: Number(initial_value) + Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      } else {
        Account.update({
          initial_value: Number(initial_value) - Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }
    }

    if (paid_out !== paid_ant && Number(new_value) !== Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: Number(initial_value) + Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      } else {
        Account.update({
          initial_value: Number(initial_value) - Number(value_ant)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }
    }

    if (paid_out === paid_ant && Number(new_value) !== Number(value_ant)) {

      const { initial_value } = await Account.findByPk(id_account_destiny);

      if (paid_out) {
        Account.update({
          initial_value: (Number(initial_value) - Number(value_ant)) + Number(new_value)
        },
          {
            where: {
              id: id_account_destiny
            }
          })
      }

    }

    // Recipe.update({
    //   total_value: new_value
    // },
    //   {
    //     where: {
    //       id: id_recipe
    //     }
    //   })

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
