const User = require('../../models/userEntities/User');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

exports.index = async (req, res, next) => {

  const users = await User.findAll();

  res.status(200).json({
    data: users
  });

}

exports.show = async (req, res, next) => {
  try {
    const id = req.user;
    
    const user = await User.findByPk(id);
    
    if (!user) return next(new Error('Usuário não existe'));

    user.password = "";

    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const {
      username,
      type,
      role,
      email,
      password,
      enable,
      accept_terms_privacy,
      id_access_plan,
      phone,
      celphone,
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    } = req.body

    const user = await User.update( {
      username,
      type,
      role,
      email,
      password,
      enable,
      updated_by: userId,
      accept_terms_privacy,
      id_access_plan
     },
     {
      where: {
        id: userId
      }
    });

    const { id_contact, id_address } = await User.findByPk(userId);

    await Contact.update( {
      phone,
      celphone,
      email
     },
     {
      where: {
        id: id_contact
      }
    });

    await Address.update( {
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
     },
     {
      where: {
        id: id_address
      }
    });

    res.status(200).json({
      data: {user},
      message: 'Usuário foi atualizado'
    });

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const { id_contact, id_address } = await User.findByPk(userId);

    if(id_contact)
      Contact.destroy({ where: { id: id_contact } });

    if(id_address)
      Address.destroy({ where: { id: id_address } });

    User.destroy({
      where: {
        id: userId
      }
    })

    res.status(200).json({
      data: null,
      message: 'Usuário foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
