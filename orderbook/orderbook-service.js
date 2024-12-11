const orderbookModel = require('./orderbook-model');
const common = require('../utils/common');
const schemas = require('../models/schemas');

const orderBookList = (req, res) => {
    orderbookModel.getOrderList().then((data) => {
        res.status(200).send({
            code: 2000,
            messageKey: "orderbook.list.success",
            data: data
        });
    }).catch((error) => {
        res.status(500).send({
            code: 5000,
            messageKey: "orderbook.list.error",
            data: error
        });
    })
}

const addOrder = (req, res) => {
    const data = common.sanitize(req.body);
    if (schemas.validate(data, schemas.addOrder)) { 
        orderbookModel.addOrder(req.body).then((data) => {
            res.status(200).send({
                code: 2000,
                messageKey: "orderbook.add.success",
                data: data
            });
        }).catch((error) => {
            res.status(500).send({
                code: 5000,
                messageKey: "orderbook.add.error",
                data: error
            });
        })
    } else {
        res.status(400).send({
            code: 4000,
            messageKey: "orderbook.add.error",
            data: "Invalid request data"
        });
    }
}

module.exports = {
    orderBookList: orderBookList,
    addOrder: addOrder
}