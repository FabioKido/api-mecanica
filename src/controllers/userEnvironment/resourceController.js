const AccessPlan = require('../../models/userEntities/AccessPlan');
const Resource = require('../../models/userEntities/Resource');

exports.index = async (req, res, next) => {
  const resource = await Resource.findAll();
  res.status(200).json({
    data: resource
  });
}

exports.show = async (req, res, next) => {
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

exports.store = async (req, res, next) => {
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

exports.update = async (req, res, next) => {
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

exports.destroy = async (req, res, next) => {
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
