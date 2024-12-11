const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const constants = require('../utils/constants');

const generateUUID = () => {
    return uuidv4();
}

/**
 * This function will remove all the fields which is not included in schema.
 * 
 * @param object
 *            data object
 * @param schema
 *            schema for the object to compare fields
 */
const sanitize =  (object, schema) => {
	var schemaKeys = Object.keys(schema.properties);
	var objectKeys = Object.keys(object);
	var constantsValues = [];

	for (var key in objectKeys) {
		var isValueMatched = false;
		for (var index in constantsValues) {
			if (constantsValues[index].indexOf(objectKeys[key].substring(0, constantsValues[index].length)) === 0) {
				isValueMatched = true;
				break;
			}
		}
		if (!isValueMatched && schemaKeys.indexOf(objectKeys[key]) === -1) {
			delete object[objectKeys[key]];
		} else {
			var propertyList = Object.keys(schema.properties[objectKeys[key]]);
			for (var index = 0; index < propertyList.length; index++) {
				if (propertyList[index] === '$ref') {
					var refValue = schema.properties[objectKeys[key]];
					var refSchema = refValue.$ref.substring(1, refValue.$ref.length);
					sanitize(object[objectKeys[key]], schemas[refSchema]);
				}
			}
		}
	}
	// logger.info(util.format('%j', object));
	return object;
};

// Get password hash with salt
const getEncryptedPasswordWithSalt =  (password, salt) =>{
	salt = salt || bcrypt.genSaltSync(10);
	const passwordHashWithSalt = bcrypt.hashSync(password, salt);
	const passwordHash = passwordHashWithSalt.substring(29);
	return {
		password: passwordHash,
		salt: salt
	};
}

const generateJWTToken = (userId) => {
    return jwt.sign({ userId: userId }, con, { expiresIn: '1h' });
}

module.exports = {
    generateUUID: generateUUID,
    sanitize: sanitize,
    getEncryptedPasswordWithSalt: getEncryptedPasswordWithSalt
}