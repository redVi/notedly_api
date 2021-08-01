module.exports = {
  // resolve author's notes
  notes: async (user, args, { models }) =>
    await models.Note.find({ author: user._id }).sort({ _id: -1 }),

  // resolve favorite notes
  favorites: async (user, args, { models }) =>
    await models.Note.find({ favoritesBy: user._id }).sort({ _id: -1 }),
}
