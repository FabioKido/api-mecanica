const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  funcao: {
    type: String,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    required: true
  },
  permission: {
    type: Schema.Types.ObjectId,
    ref: 'Permission',
    required: true
  },
  enable: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const Group = mongoose.model('group', GroupSchema)

module.exports = Group;