const Timeline = require('../../models/serviceEntities/Timeline');

exports.index = async (req, res) => {
  const timelines = await Timeline.findAll();

  res.status(200).json({
    timelines
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_order } = req.params;

    const timeline = await Timeline.findOne({
      where: {
        id_order
      }
    });

    if (!timeline) return next(new Error('Timeline de Serviço não existe'));

    res.status(200).json({
      timeline
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_order } = req.params;

    const timeline = await Timeline.create({
      id_order,
      enable: true,
      created_by: userId
    });

    res.json({
      timeline,
      message: "Timeline do Serviço cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}
