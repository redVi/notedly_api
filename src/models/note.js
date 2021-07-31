const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    validate: () => 'Введите текст'
  },
  author: {
    type: String,
    required: true,
    validate: () => 'Введите имя автора'
  },
}, {
  // Присваиваем поля createdAt и updatedAt с типом данных
  timestamps: true,
  validateBeforeSave: true
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
