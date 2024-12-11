const schema = require('../models/schemas');
const common = require('../utils/common');
const user = require('../models/user');
const jwt = require('../utils/jwttoken');

const login = (req, res) => {
    const data = common.sanitize(req.body, schema.login);
    if (schema.validate(data, schema.login)) {
        // authenticate user
        user.authenthicate(data.email, data.password).then((data) => {
            const token = jwt.generateToken(data.user_id);
            res.header('Authorization', token);
            res.status(200).send({
                code: 2000,
                messageKey: "login.success",
                data: data
            });
        }).catch((error) => {
            if (error && error.code) {
                res.status(400).send({
                    code: error.code,
                    messageKey: error.message,
                    data: error
                });
            } else {
                res.status(500).send({
                    code: 5000,
                    messageKey: "login.error",
                    data: error
                });
            }
        })
    } else {
        res.status(400).send({
            code: 4000,
            messageKey: "login.error",
            data: "Invalid request data"
        });
    }
}

const register = (req, res) => {
    const data = common.sanitize(req.body, schema.register);
    if (schema.validate(data, schema.register)) {
        user.register(data).then((data) => {
            res.status(200).send({
                code: 2000,
                messageKey: "register.success",
                data: data
            });
        }).catch((error) => {
            if (error && error.code) {
                res.status(400).send({
                    code: error.code,
                    messageKey: error.message,
                    data: error
                });
            } else {
                res.status(500).send({
                    code: 5000,
                    messageKey: "register.error",
                    data: error
                });
            }
        })
    } else {
        res.status(400).send({
            code: 4000,
            messageKey: "register.error",
            data: "Invalid request data"
        });
    }
}

module.exports = {
    login: login,
    register: register
}