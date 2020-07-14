const Checklist = require('../../models/serviceEntities/Checklist');

exports.index = async (req, res) => {
  const checklists = await Checklist.findAll();

  res.status(200).json({
    data: checklists
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_checklist } = req.params;

    const checklist = await Checklist.findByPk(id_checklist);

    if (!checklist) return next(new Error('Checklist de Veículos não existe'));

    res.status(200).json({
      data: checklist
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const { id_diagnostic } = req.params;

    const checklist = await Checklist.create({
      id_diagnostic,
      enable: true
    });

    res.json({
      data: checklist,
      message: "Checklist de Veículos cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {

    const { id_checklist } = req.params;
    const { enable } = req.body;

    const checklist = await Checklist.update({
      enable
    },
      {
        where: {
          id: id_checklist
        }
      });

    res.json({
      data: checklist,
      message: "Checklist de Veículos atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_checklist } = req.params;

    Checklist.destroy({
      where: {
        id: id_checklist
      }
    })

    res.status(200).json({
      data: null,
      message: 'Checklist de Veículos foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
