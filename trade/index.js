const service = require("./trade-service");
module.exports = function (app) {
    app.post("/trades/list", service.tradeList);
}