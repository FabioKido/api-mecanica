const Timeline = require('../../models/serviceEntities/Timeline');

exports.index = async (req, res) => {
  const timelines = await Timeline.findAll();

  res.status(200).json({
    timelines
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_timeline } = req.params;

    const timeline = await Timeline.findByPk(id_timeline);

    if (!timeline) return next(new Error('Timeline do Serviço não existe'));

    res.status(200).json({
      data: timeline
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;

    const timeline = await Timeline.create({
      enable: true,
      created_by: userId
    });

    res.json({
      data: timeline,
      message: "Timeline do Serviço cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_timeline } = req.params;

    Timeline.destroy({
      where: {
        id: id_timeline
      }
    })

    res.status(200).json({
      data: null,
      message: 'Timeline do Serviço foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
