const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
    required: true
  },
  enable: {
    type: Boolean,
    default: true
  },
  accessToken: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User;