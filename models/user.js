const common = require('../utils/common');
const db = require('../models/db');
const user = {};

user.authenthicate = (email, password) => {
    return new Promise((resolve, reject) => {
        // get user from db
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        db.query(query).then((result) => {
            if (result.rows.length > 0) {
                const user = result.rows[0];
                const encryptedPwd = common.getEncryptedPasswordWithSalt(password, user.salt);
                if (user.password === encryptedPwd.password) {
                    resolve(result.rows[0]);
                } else {
                    reject({ "code": "4010", "message": "Invalid credential!" });
                }
            } else {
                reject({ "code": "4011", "message": "User not found" });
            }
        }).catch((error) => {
            console.error(error);
            reject(error);
        })
    })
}

user.register = (data) => {
    return new Promise((resolve, reject) => {
        // check if user already exists with same email
        user.findOne(data.email).then((result) => {
            if (result) {
                reject({ "code": "4012", "message": "User already exists" });
            } else {
                // insert user
                const encryptedPwd = common.getEncryptedPasswordWithSalt(data.password);
                const query = `INSERT INTO users (email, password, name, salt) VALUES ('${data.email}', '${encryptedPwd.password}', '${data.name}', '${encryptedPwd.salt}');`;
                db.query(query).then((result) => {
                    resolve(result);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                })
            }
        }).catch((error) => {
            reject(error);
        })
    })
}

user.findOne = (email) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        db.query(query).then((result) => {
            if (result.rows.length > 0) {
                resolve(result.rows[0]);
            } else {
                resolve(false);
            }
        }).catch((error) => {
            console.error(error);
            reject(error);
        })
    })
}

module.exports = user;