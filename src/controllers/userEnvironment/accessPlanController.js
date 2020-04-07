const AccessPlan = require('../../models/userEntities/AccessPlan');
const Resource = require('../../models/userEntities/Resource');

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
      created_by,
      updated_by,
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

exports.getResources = async (req, res, next) => {
  const resource = await Resource.findAll();
  res.status(200).json({
    data: resource
  });
}

exports.getResource = async (req, res, next) => {
  try {
    const resourceId = req.params.resourceId;
    const resource = await Resource.findByPk(resourceId);
    if (!resource) return next(new Error('Recurso não existe'));
    res.status(200).json({
      data: resource
    });
  } catch (error) {
    next(error)
  }
}

exports.addResource = async (req, res, next) => {
  try {

    const { id_access_plan } = req.params;
    const { name, action, enable, qtd } = req.body;

    const plan = await AccessPlan.findByPk(id_access_plan);

    if (!plan) {
      return res.status(400).json({ error: 'Plano de Acesso não encontrado' });
    }

    const resource = await Resource.create({
      name,
      action,
      enable,
      qtd,
      id_access_plan,
    });

    res.json({
      data: resource,
      message: "Recurso cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.updateResource = async (req, res, next) => {
  try {

    const resourceId = req.params.resourceId;
    const { name, action, enable, qtd } = req.body;

    const resource = await Resource.update( {
      name,
      action,
      enable,
      qtd,
     },
     {
      where: {
        id: resourceId
      }
    });

    res.json({
      data: resource,
      message: "Recurso atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteResource = async (req, res, next) => {
  try {

    const resourceId = req.params.resourceId;

    Resource.destroy({
      where: {
        id: resourceId
      }
    })

    res.status(200).json({
      data: null,
      message: 'Recurso foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
