const posts = [];

const getAll = async () => {
  return posts;
};

const getOneById = async (id) => {
  return posts.find((post) => post.id === id);
};

const postOne = async (post) => {
  posts.push(post);
  return post;
};

module.exports = {
  getAll,
  getOneById,
  postOne,
};
