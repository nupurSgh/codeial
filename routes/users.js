const express =require('express');
const router = express.Router();

const usersController = require('../controllers/users_controllers')

router.get('/profile', usersController.profile);

router.get('/signup', usersController.signUp);
router.get('/signin', usersController.signIn);

router.post('/create', usersController.create);

module.exports = router;