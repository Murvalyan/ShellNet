const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator')
const {pass} = require('./config')


const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, pass, { expiresIn: "24h" })
}

class authController {
    async reg(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json( { message: "Ошибка при регистрации:", errors } )
            }
            const {username, password} = req.body;
            const candidate = await User.findOne( { username } );
            if (candidate) {
                return res.status(400).json( { message: 'Пользователь с таким именем уже существует' } )
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne( { value: "USER" } );
            const user = new User( { username, password: hashPassword, roles: [userRole.value] } );
            await user.save();
            return res.json( { message: "Пользователь успешно зарегистрирован" } );

        } catch (error) {
            console.log(error);
            res.status(400).json( { message: 'reg error' } )
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne( { username } );
            if (user) {
                return res.status(400).json( { message: `Пользователь ${ username } не найден` } )
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json( { message: 'Введен не верный пароль' } )
            }

            const token = generateAccessToken(user._id, user.roles)
            return res.json( { token } )

        } catch (error) {
            console.log(error);
            res.status(400).json( { message: 'login error' } )
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authController();