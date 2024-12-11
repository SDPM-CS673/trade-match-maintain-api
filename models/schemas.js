const Validator = require('jsonschema').Validator;
const util = require('util');
var _validator = new Validator();

var schemas = function () {
};

schemas.login = {
	'id': '/login',
	'type': 'object',
	'properties': {
		'email': {
			'type': 'string',
			'required': true
		},
		'password': {
			'type': 'string',
			'required': true
		},
	}
};

schemas.register = {
    'id': '/register',
    'type': 'object',
    'properties': {
        'email': {
            'type': 'string',
            'required': true
        },
        'password': {
            'type': 'string',
            'required': true
        },
        'name': {
            'type': 'string',
            'required': true
        }
    }
}

// Login request schema
schemas.addOrder = {
	'id': '/addOrder',
	'type': 'object',
	'properties': {
		'product_category': {
			'type': 'string',
			'required': true
		},
		'product_name': {
			'type': 'string',
			'required': true
		},
		'order_type': {
			'type': 'string',
			'required': true
		},
        'side': {
			'type': 'string',
			'required': true
		},
        'order_price': {
			'type': 'string',
			'required': true
		},
        'order_qty': {
			'type': 'string',
			'required': true
		}
	}
};

schemas.validate = function (object, schema) {
	if (object === undefined || object === null) {
		return false;
	} else {
		const errors = _validator.validate(object, schema).errors;
		if (errors.length > 0) {
			console.error(util.format('Schema validation failed for 0: %j', errors));
		}
		return errors.length <= 0 ? true : false;
	}
};

module.exports = schemas;