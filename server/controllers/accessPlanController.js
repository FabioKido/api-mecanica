const AccessPlan = require('../models/AccessPlan');
const Resource = require('../models/Resource');

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