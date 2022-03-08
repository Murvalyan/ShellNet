const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require("express-validator")

router.post('/reg', [
    check('username, "Имя пользователя не может быть пустым"').notEmpty(),
    check('password', "Пароль должен быть больше 6 символов и не больше 24").isLength( { min:6, max:24 } )
], controller.reg);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;