module.exports = {
  // resolve information about note's author
  author: async (note, args, { models }) =>
    await models.User.findById(note.author),

  // resolve favoritedBy for note
  favoritedBy: async (note, args, { models }) =>
    await models.User.find({ _id: { $in: note.favoritedBy } }),
}
