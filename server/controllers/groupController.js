const User = require('../models/User');
const Group = require('../models/Group');
const Permission = require('../models/Permission');

exports.getGroups = async (req, res, next) => {
  const groups = await Group.findAll();
  res.status(200).json({
    data: groups
  });
}

exports.getGroup = async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findByPk(groupId);
    if (!group) return next(new Error('Grupo não existe'));
    res.status(200).json({
      data: group
    });
  } catch (error) {
    next(error)
  }
}

/*exports.createGroup = async (req, res, next) => {
  try {
    const { function, description, enable } = req.body;

    const newGroup = await Group.create({
      function,
      description,
      enable,
      created_by,
      updated_by,
    });

    res.json({
      data: newGroup,
      message: "Grupo cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}*/

/*exports.addPermission = async (req, res, next) => {
  try {

    const { id_group } = req.params;
    const { name } = req.body;

    const group = await User.findByPk(id_group);

    if (!group) {
      return res.status(400).json({ error: 'Grupo não encontrado' });
    }

    const [ tech ] = await Permission.findOrCreate({
      where: { name }
    });

    await group.addPermission();

    const {  } = req.body
    const newPermission = new Permission({  });
    await newPermission.save();
    res.json({
      data: newPermission,
      message: "Nova permissão adicionada"
    })
  } catch (error) {
    next(error)
  }
}*/

exports.addUserInGroup = async (req, res, next) => {
  try{
    const { id_user } = req.params;
    const { id_group } = req.body;

    const user = await User.findByPk(id_user);
	
    if (!user) {
      return res.status(400).json({ error: 'User não encontrado' });
    }

    const group = await Group.findByPk(id_group);

    await user.addGroup(group);

    return res.json(group);

  } catch (error) {
    next(error)
  }
}//Falta terminar de resolver os erros aqui 

exports.getPermission = async (req, res, next) => {
  try {
    const permissionId = req.params.permissionId;
    const permission = await Permission.findByPk(permissionId);
    if (!permission) return next(new Error('Permissão não existe'));
    res.status(200).json({
      data: permission
    });
  } catch (error) {
    next(error)
  }
}
