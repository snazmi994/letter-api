const mongoose = require('mongoose')
const commentSchema = require('./comment')
const letterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true
})
module.exports = mongoose.model('Letter', letterSchema)
