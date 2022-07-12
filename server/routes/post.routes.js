const Router = require('express').Router;

const postController = require('../controllers/post.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router()

router.post('/',authMiddleware,postController.create)
router.get('/',postController.getAll)
router.put('/',postController.update)



module.exports = router;