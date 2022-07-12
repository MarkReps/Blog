const Router = require('express').Router;

const userRouter = require('./user.routes');
const postRouter = require('./post.routes');
const groupRouter = require('./group.routes');
const tagRouter = require('./tag.routes');

const router = Router();


router.use('/user',userRouter);
router.use('/posts',postRouter);
router.use('/groups',groupRouter);
router.use('/tags',tagRouter);

module.exports = router;