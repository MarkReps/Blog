const Router = require('express').Router;

const groupController = require('../controllers/group.controller')

const router = Router()

router.post('/create',groupController.create);
router.get('/getAll',groupController.getAll);
router.delete('/delete/:id',groupController.delete)

module.exports = router;