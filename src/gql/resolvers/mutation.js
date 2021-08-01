require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const { AuthenticationError,  ForbiddenError } = require('apollo-server-express')

module.exports = {
  createNote: async (parent, args, { models }) =>
    await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    }),

  deleteNote: async (parent, { id }, { models }) => {
    try {
      await models.Note.findOneAndRemove({ _id: id })
      return true
    } catch {
      return false
    }
  },

  updateNote: async (parent, { content, id }, { models }) =>
    await models.Note.findOneAndUpdate(
      { _id: id },
      {
        $set: { content }
      },
      { new: true }
    ),

  signUp: async (parent, { username, email, password }, { models }) => {
    email = email.trim().toLowerCase()
    const hashed = await bcrypt.hash(password, 10)
    const avatar = gravatar.url(email)

    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed,
      })

      return jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    } catch (err) {
      throw new Error('Error creating account')
    }
  },

  signIn: async (parent, { username, email, password }, { models }) => {
    if (email) email = email.trim().toLowerCase()

    const user = await models.User.findOne({
      $or: [{ email }, { username }]
    })
    if (!user) throw new AuthenticationError('Error signing in')

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new ForbiddenError('Forbidden')

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  }
}
