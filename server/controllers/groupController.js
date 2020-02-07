/*

const Group = require('../models/Group');
const Permission = require('../models/Permission');

exports.getGroups = async (req, res, next) => {
  const groups = await Group.find({});
  res.status(200).json({
    data: groups
  });
}

exports.getGroup = async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findById(groupId);
    if (!group) return next(new Error('group does not exist'));
    res.status(200).json({
      data: group
    });
  } catch (error) {
    next(error)
  }
}

exports.addGroup = async (req, res, next) => {
  try {
    const { funcao, descricao, permission, enable } = req.body
    const newGroup = new Group({ funcao, descricao, permission, enable });
    await newGroup.save();
    res.json({
      data: newGroup,
      message: "You have a new group with successfully"
    })
  } catch (error) {
    next(error)
  }
}



exports.addPermission = async (req, res, next) => {
  try {
    const { create, edit, email } = req.body
    const newPermission = new Permission({ create: create || false, edit: edit || false, email: email || false});
    await newPermission.save();
    res.json({
      data: newPermission,
      message: "You have a new permission with successfully"
    })
  } catch (error) {
    next(error)
  }
}

exports.getPermission = async (req, res, next) => {
  try {
    const permissionId = req.params.permissionId;
    const permission = await Permission.findById(permissionId);
    if (!permission) return next(new Error('permission does not exist'));
    res.status(200).json({
      data: permission
    });
  } catch (error) {
    next(error)
  }
}

*/