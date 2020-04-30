const OrderProduct = require('../../models/serviceEntities/OrderProduct');

module.exports = {

  async getOrderProducts(req, res) {
    const automobiles = await OrderProduct.findAll();
    res.status(200).json({
      data: automobiles
    });
  },

  async getOrderProduct(req, res) {
    const { id_automobile } = req.params;

    const automobile = await OrderProduct.findByPk(id_automobile, {
      include: { association: 'vehicle' }
    })

    return res.json(automobile);
  },

  async addOrderProduct(data) {

    const { id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar } = data;

    const automobile = await OrderProduct.create({
      id_vehicle,
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar
    });

    return automobile;
  },

  async updateOrderProduct(data) {

    const { id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar } = data;

    const auto = await OrderProduct.findOne({
      where: {
        id_vehicle
      }
    });

    if(!auto)
      return;

    const automobile = await OrderProduct.update( {
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar
     },
     {
      where: {
        id: auto.id
      }
    });

    return automobile;
  }

};
