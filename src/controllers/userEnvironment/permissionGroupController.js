const Group = require('../../models/userEntities/Group');
const Permission = require('../../models/userEntities/Permission');

// exports.getPermissionInGroup = async (req, res, next) => {
//   try {
//     const permissionId = req.params.permissionId;
//     const permission = await Permission.findByPk(permissionId);
//     if (!permission) return next(new Error('Permission não existe'));
//     res.status(200).json({
//       data: permission
//     });
//   } catch (error) {
//     next(error)
//   }
// }
