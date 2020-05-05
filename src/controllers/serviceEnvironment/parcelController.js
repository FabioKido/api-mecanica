const Parcel = require('../../models/serviceEntities/Parcel');

exports.index = async (req, res) => {
  const { id_payment } = req.query;

  const parcels = await Parcel.findAll({
    where: {
      id_payment
    }
  });

  res.status(200).json({
    data: parcels
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
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
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
      value,
      vencimento,
      document_number,
      taxa_ajuste,
      observations,
      paid_out
    } = req.body;

    const parcel = await Parcel.update( {
      value,
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
