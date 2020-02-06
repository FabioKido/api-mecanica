const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
  create: {
    type: Boolean,
    default: false
  },
  edit: {
    type: Boolean,
    default: false
  },
  email: {
    type: Boolean,
    default: false
  }
})

const Permission = mongoose.model('permission', PermissionSchema)

module.exports = Permission;