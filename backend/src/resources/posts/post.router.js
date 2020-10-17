const router = require('express').Router();
const { NOT_FOUND } = require('http-status-codes').StatusCodes;

const postsService = require('./post.service');
const { ErrorHanler, catchErrors } = require('../../common/error');
const { ERRORS } = require('../../common/constants');

router
  .route('/')
  .get(
    catchErrors(async (req, res) => {
      const posts = await postsService.getAll();
      res.json(posts);
    })
  )
  .post(
    catchErrors(async (req, res) => {
      const post = await postsService.postOne(req.body);
      res.json(post);
    })
  );

router.route('/:postId').get(
  catchErrors(async (req, res) => {
    const { postId } = req.params;

    const post = await postsService.getOneById(postId);
    if (!post) {
      throw new ErrorHanler(NOT_FOUND, ERRORS.POST_NOT_FOUND);
    }
    res.json(post);
  })
);

module.exports = router;
