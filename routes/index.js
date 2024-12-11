module.exports = function (app) {
    require("../orderbook/index")(app);
    require("../trade/index")(app);
    require("../authentication/index")(app);
}