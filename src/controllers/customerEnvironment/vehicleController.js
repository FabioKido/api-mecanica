const Vehicle = require('../../models/customerEntities/Vehicle');
const Customer = require('../../models/customerEntities/Customer');

const { createAutomobile, updateAutomobile } = require('../../services/automobileService');
const { createBicycle, updateBicycle } = require('../../services/bicycleService');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const vehicles = await Vehicle.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      vehicles
    });
  } catch (error) {
    next(error)
  }
},

  exports.store = async (req, res) => {

    const userId = req.user;
    const {
      id_customer,
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar,
      hand_brake,
      automovel
    } = req.body;

    const customer = await Customer.findByPk(id_customer);

    if (!customer) {
      return res.status(400).json({ error: 'Cliente não encontrado' });
    }

    const vehicle = await Vehicle.create({
      id_customer,
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      type: automovel ? 'Auto' : 'Bike',
      enable: true,
      created_by: userId
    });

    if (vehicle.type === 'Auto') {
      await createAutomobile({ id_vehicle: vehicle.id, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar });
    } else {
      await createBicycle({ id_vehicle: vehicle.id, hand_brake });
    }

    res.json({
      data: { vehicle },
      message: "Veículo cadastrado com sucesso"
    });
  },

  exports.update = async (req, res) => {
    const userId = req.user;
    const { id_vehicle } = req.params;
    const {
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar,
      hand_brake
    } = req.body;

    const vehicle = await Vehicle.update({
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      updated_by: userId
    },
      {
        where: {
          id: id_vehicle
        }
      });

    await updateAutomobile({ id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar });

    await updateBicycle({ id_vehicle, hand_brake });

    res.status(200).json({
      data: { vehicle },
      message: 'Veículo foi atualizado'
    });
  },

  exports.destroy = async (req, res) => {
    const { id_vehicle } = req.params;

    Vehicle.destroy({
      where: {
        id: id_vehicle
      }
    })

    res.status(200).json({
      data: null,
      message: "Veículo deletado com sucesso"
    });
  }

