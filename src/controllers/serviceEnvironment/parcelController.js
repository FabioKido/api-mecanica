const Parcel = require('../../models/serviceEntities/Parcel');

exports.index = async (req, res) => {
  const { id_payment } = req.query;

  const parcels = await Parcel.findAll({
    where: {
      id_payment
    }
  });

  res.status(200).json({
    parcels
  });
}

exports.store = async (req, res, next) => {
  try {
    const { id_payment } = req.params;
    const {
      id_payment_method,
      id_bank_account,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const parcel = await Parcel.create({
      id_payment: id_payment || null,
      id_payment_method: id_payment_method || null,
      id_bank_account: id_bank_account || null,
      value,
      vencimento: vencimento || Date.now(),
      document_number,
      taxa_ajuste,
      observations,
      paid_out: paid_out || false
    });

    res.json({
      data: parcel,
      message: "Parcela cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const { id_parcel } = req.params;
    const {
      id_payment_method,
      id_bank_account,
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out,
      taxa_ant
    } = req.body;

    const total = taxa_ajuste !== taxa_ant ? (Number(value) - Number(taxa_ant)) + Number(taxa_ajuste) : value;

    const parcel = await Parcel.update({
      id_payment_method: id_payment_method || null,
      id_bank_account: id_bank_account || null,
      value: total,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    },
      {
        where: {
          id: id_parcel
        }
      });

    res.json({
      data: parcel,
      message: "Parcela atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_parcel } = req.params;

    Parcel.destroy({
      where: {
        id: id_parcel
      }
    })

    res.status(200).json({
      data: null,
      message: 'Parcela foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
