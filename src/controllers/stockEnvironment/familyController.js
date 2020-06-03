const Family = require('../../models/stockEntities/Family');

exports.index = async (req, res, next) => {
  const families = await Family.findAll();
  res.status(200).json({
    data: families
  });
}

exports.show = async (req, res, next) => {
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

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const { name, description } = req.body;

    const family = await Family.create({
      name,
      description,
      created_by: userId
    });

    res.json({
      data: family,
      message: "Familia cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_family } = req.params;
    const {
      name,
      description
    } = req.body;

    const family = await Family.update( {
      name,
      description,
      updated_by: userId
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

exports.destroy = async (req, res, next) => {
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
