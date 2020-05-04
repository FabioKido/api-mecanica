const AccessPlan = require('../../models/userEntities/AccessPlan');

exports.getAccessPlans = async (req, res, next) => {
  const accessPlans = await AccessPlan.findAll();
  res.status(200).json({
    data: accessPlans
  });
}

exports.getAccessPlan = async (req, res, next) => {
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

exports.addAccessPlan = async (req, res, next) => {
  try {
    const { name, type, value, enable, created_by, updated_by } = req.body;

    const accessPlan = await AccessPlan.create({
      name,
      type,
      value,
      enable,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: accessPlan,
      message: "Plano de Acesso cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.updateAccessPlan = async (req, res, next) => {
  try {

    const planId = req.params.planId;
    const { name, type, value, enable } = req.body

    const accessPlan = await AccessPlan.update( {
      name,
      type,
      value,
      enable,
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

exports.deleteAccessPlan = async (req, res, next) => {
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
