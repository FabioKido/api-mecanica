const { Op, fn, literal } = require('sequelize');

const Vehicle = require('../../models/customerEntities/Vehicle');
const Customer = require('../../models/customerEntities/Customer');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const customers = await Customer.findAll({
      group: ['sex'],
      attributes: ['sex', [fn('COUNT', 'sex'), 'count']],
      order: [[literal('count'), 'DESC']],
      raw: true,
      where: {
        created_by: id_user,
      }
    });

    const fabricators = await Vehicle.findAll({
      group: ['fabricator'],
      attributes: ['fabricator', [fn('COUNT', 'fabricator'), 'count']],
      order: [[literal('count'), 'DESC']],
      raw: true,
      where: {
        created_by: id_user,
      },
      limit: 3
    });

    const models = await Vehicle.findAll({
      group: ['model'],
      attributes: ['model', [fn('COUNT', 'model'), 'count']],
      order: [[literal('count'), 'DESC']],
      raw: true,
      where: {
        created_by: id_user,
      },
      limit: 5
    });

    res.status(200).json({
      customers, fabricators, models
    });
  } catch (error) {
    next(error)
  }
}