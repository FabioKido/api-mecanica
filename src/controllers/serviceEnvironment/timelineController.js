const Timeline = require('../../models/serviceEntities/Timeline');

exports.getTimelines = async (req, res) => {
  const timelines = await Timeline.findAll();

  res.status(200).json({
    data: timelines
  });
}

exports.getTimeline = async (req, res, next) => {
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

exports.addTimeline = async (req, res, next) => {
  try {
    const { title } = req.body;

    const timeline = await Timeline.create({
      title
    });

    res.json({
      data: timeline,
      message: "Timeline do Serviço cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateTimeline = async (req, res, next) => {
  try {

    const { id_timeline } = req.params;
    const { title } = req.body;

    const timeline = await Timeline.update( {
      title
     },
     {
      where: {
        id: id_timeline
      }
    });

    res.json({
      data: timeline,
      message: "Timeline do Serviço atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteTimeline = async (req, res, next) => {
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
