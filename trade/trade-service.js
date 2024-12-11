const tradeModel = require("./trade-model");
const tardeModel = require("./trade-model");

const tradeList = (req, res) => {
    tradeModel.getTradeList().then((data) => {
        res.status(200).send({
            code: 2000,
            messageKey: "trade.list.success",
            data: data
        });
    }).catch((error) => {
        res.status(500).send({
            code: 5000,
            messageKey: "trade.list.error",
            data: error
        });
    })
}

module.exports = {
    tradeList: tradeList
}