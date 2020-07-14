const ChecklistDetail = require('../../models/serviceEntities/ChecklistDetail');

exports.index = async (req, res) => {
  const { id_checklist } = req.query;

  const checklist_details = await ChecklistDetail.findAll({
    where: {
      id_checklist
    }
  });

  res.status(200).json({
    checklist_details
  });
}

exports.store = async (req, res, next) => {
  try {
    const { id_checklist } = req.params;

    const { title, checked } = req.body;

    const checklist_detail = await ChecklistDetail.create({
      id_checklist,
      title,
      checked: checked || false
    });

    res.json({
      data: checklist_detail,
      message: "Item do Checklist do Diagnóstico cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const { id_check_detail } = req.params;
    const { title, checked } = req.body;

    const checklist_detail = await ChecklistDetail.update({
      title,
      checked
    },
      {
        where: {
          id: id_check_detail
        }
      });

    res.json({
      data: checklist_detail,
      message: "Item do Checklist do Diagnóstico atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_check_detail } = req.params;

    ChecklistDetail.destroy({
      where: {
        id: id_check_detail
      }
    })

    res.status(200).json({
      data: null,
      message: 'Item do Checklist do Diagnóstico foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
