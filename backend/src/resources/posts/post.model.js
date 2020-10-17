const uuid = require('uuid').v4;

class Post {
  constructor({ id = uuid(), text = 'text' } = {}) {
    this.text = text;
    this.id = id;
  }
}

module.exports = Post;
