const Query = {
  /**
   * Gets all quizes
   *
   * @param {string} authUserId
   * @param {int} skip how many posts to skip
   * @param {int} limit how many posts to limit
   */
  getQuizes: async (root, { authUserId, skip, limit }, { Quiz }) => {
    const query = {
      $and: [{ image: { $ne: null } }, { author: { $ne: authUserId } }],
    };
    const postsCount = await Quiz.find(query).countDocuments();
    const allPosts = await Quiz.find(query)
      .populate({
        path: 'questions',
        options: { sort: { createdAt: 'desc' } },
        populate: { path: 'options' },
      })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: 'desc' });

    return { quizes: allPosts, count: postsCount };
  },
};

export default { Query };
