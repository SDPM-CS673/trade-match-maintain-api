const service = require('./orderbook-service');

module.exports = function (app) {
  app.post('/orders/list', service.orderBookList);

  app.post("/order/add", service.addOrder);
}