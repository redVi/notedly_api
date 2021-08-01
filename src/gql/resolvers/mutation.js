require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const mongoose = require('mongoose')
const { AuthenticationError,  ForbiddenError } = require('apollo-server-express')

module.exports = {
  createNote: async (parent, args, { models, user }) => {
    console.log('user', user)
    if (!user) throw new AuthenticationError('You must be signed in to create a note')

    try {
      return await models.Note.create({
        content: args.content,
        author: mongoose.Types.ObjectId(user.id)
      })
    } catch (err) {
      throw new Error('Error creating note')
    }
  },

  deleteNote: async (parent, { id }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to delete a note')

    const note = await models.Note.findById({ _id: id })

    if (note && String(note.author) !== user.id) {
      throw new ForbiddenError("You don't have permissions to delete the note")
    }

    try {
      await note.remove()
    } catch (err) {
      return false
    }
  },

  updateNote: async (parent, { content, id }, { models, user }) => {
    if (!user) throw new AuthenticationError('You must be signed in to update a note')

    const note = await models.Note.findById({ _id: id })

    if (note && String(note.author) !== user.id) {
      throw new ForbiddenError("You don't have permissions to update the note")
    }

    return note.update(
      { _id: id },
      { $set: { content } },
      { new: true }
    )

    // return await models.Note.findOneAndUpdate(
    //
    // )
  },

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

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw new ForbiddenError('Forbidden')

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  }
}
