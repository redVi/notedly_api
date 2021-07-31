module.exports = {
  createNote: async (parent, args, { models }) =>
    await models.Note.create({
      content: args.content,
      author: 'Adam Scott'
    })
}
