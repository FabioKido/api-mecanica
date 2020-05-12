const AccessPlan = require('../../models/userEntities/AccessPlan');

exports.index = async (req, res, next) => {
  const accessPlans = await AccessPlan.findAll();
  res.status(200).json({
    data: accessPlans
  });
}

exports.show = async (req, res, next) => {
  try {
    const planId = req.params.planId;
    const accessPlan = await AccessPlan.findByPk(planId);
    if (!accessPlan) return next(new Error('Plano de Acesso não existe'));
    res.status(200).json({
      data: accessPlan
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {

    const userId = req.user.id;
    const { name, type, value, enable, created_by, updated_by } = req.body;

    const accessPlan = await AccessPlan.create({
      name,
      type,
      value,
      enable,
      created_by: userId
    });

    res.json({
      data: accessPlan,
      message: "Plano de Acesso cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const userId = req.user.id;
    const planId = req.params.planId;
    const { name, type, value, enable } = req.body

    const accessPlan = await AccessPlan.update( {
      name,
      type,
      value,
      enable,
      updated_by: userId
     },
     {
      where: {
        id: planId
      }
    });

    res.json({
      data: accessPlan,
      message: "Plano de Acesso atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const planId = req.params.planId;

    AccessPlan.destroy({
      where: {
        id: planId
      }
    })

    res.status(200).json({
      data: null,
      message: 'Plano de Acesso foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
