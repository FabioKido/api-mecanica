const Family = require('../../models/stockEntities/Family');

exports.getFamilies = async (req, res, next) => {
  const families = await Family.findAll();
  res.status(200).json({
    data: families
  });
}

exports.getFamily = async (req, res, next) => {
  try {
    const { id_family } = req.params;
    const family = await Family.findByPk(id_family);
    if (!family) return next(new Error('Familia não existe'));
    res.status(200).json({
      data: family
    });
  } catch (error) {
    next(error)
  }
}

exports.addFamily = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const family = await Family.create({
      name,
      description,
      created_by: null,
      updated_by: null,
    });

    res.json({
      data: family,
      message: "Familia cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.updateFamily = async (req, res, next) => {
  try {

    const { id_family } = req.params;
    const {
      name,
      description
    } = req.body;

    const family = await Family.update( {
      name,
      description
     },
     {
      where: {
        id: id_family
      }
    });

    res.json({
      data: family,
      message: "Familia atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteFamily = async (req, res, next) => {
  try {

    const { id_family } = req.params;

    Family.destroy({
      where: {
        id: id_family
      }
    })

    res.status(200).json({
      data: null,
      message: 'Family foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
