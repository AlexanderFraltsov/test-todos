const postsRepo = require('./post.memory.repository');
const Post = require('./post.model');

const getAll = async () => {
  const posts = await postsRepo.getAll();
  return posts;
};

const getOneById = async (id) => {
  const post = await postsRepo.getOneById(id);
  if (post) {
    return post;
  }
};

const postOne = async (newPost) => {
  const post = new Post({ ...newPost });
  const result = await postsRepo.postOne(post);
  return result;
};

module.exports = {
  getAll,
  getOneById,
  postOne,
};
