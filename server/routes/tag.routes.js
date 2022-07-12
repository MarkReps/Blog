const Router = require('express').Router;

const tagController = require('../controllers/tag.controller')

const router = Router()

router.post('/create',tagController.create);
router.get('/getAll',tagController.getAll);
router.delete('/delete/:id',tagController.delete)

module.exports = router;