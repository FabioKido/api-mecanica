const TimelineDetail = require('../../models/serviceEntities/TimelineDetail');

exports.index = async (req, res) => {
  const { id_timeline } = req.query;

  const timeline_details = await TimelineDetail.findAll({
    where: {
      id_timeline
    }
  });

  res.status(200).json({
    timeline_details
  });
}

exports.store = async (req, res, next) => {
  try {
    const { id_timeline } = req.params;

    const { title, complete } = req.body;

    const timeline_detail = await TimelineDetail.create({
      id_timeline,
      title,
      complete
    });

    res.json({
      data: timeline_detail,
      message: "Item da Timeline do Serviço cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {

    const { id_time_detail } = req.params;
    const { title, complete } = req.body;

    const timeline_detail = await TimelineDetail.update({
      title,
      complete
    },
      {
        where: {
          id: id_time_detail
        }
      });

    res.json({
      data: timeline_detail,
      message: "Item da Timeline do Serviço atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_time_detail } = req.params;

    TimelineDetail.destroy({
      where: {
        id: id_time_detail
      }
    })

    res.status(200).json({
      data: null,
      message: 'Item da Timeline do Serviço foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
