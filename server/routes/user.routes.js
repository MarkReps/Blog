const Router = require('express').Router;

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = Router();

router.post('/registration',userController.registration);
router.post('/login',userController.login);
router.get('/check',authMiddleware,userController.check)
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUser);
router.delete('/delete/:id',userController.delete);
router.put('/update/:id',userController.update);


module.exports = router;