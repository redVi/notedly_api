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
    )
}
