const tradeModel = {};

tradeModel.getTradeList = () => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                "trade_id": "ad3e4567-e89b-12d3-a456-426614174000",
                "order_id": 101,
                "member_id": 2001,
                "trade_date_time": "2024-12-08T14:30:00",
                "trade_price": 250.75,
                "trade_qty": 100,
                "side": "Buy",
                "market_id": 301,
                "product_name": "Stock A",
                "trade_margin": 15.25
            },
            {
                "trade_id": "ad3e4567-e89b-12d3-a456-426614174001",
                "order_id": 102,
                "member_id": 2002,
                "trade_date_time": "2024-12-08T15:00:00",
                "trade_price": 180.50,
                "trade_qty": 50,
                "side": "Sell",
                "market_id": 302,
                "product_name": "Stock B",
                "trade_margin": 10.00
            },
            {
                "trade_id": "ad3e4567-e89b-12d3-a456-426614174002",
                "order_id": 103,
                "member_id": 2003,
                "trade_date_time": "2024-12-08T16:00:00",
                "trade_price": 320.00,
                "trade_qty": 25,
                "side": "Buy",
                "market_id": 303,
                "product_name": "Stock C",
                "trade_margin": 20.50
            },
            {
                "trade_id": "ad3e4567-e89b-12d3-a456-426614174003",
                "order_id": 104,
                "member_id": 2004,
                "trade_date_time": "2024-12-08T16:30:00",
                "trade_price": 400.00,
                "trade_qty": 10,
                "side": "Sell",
                "market_id": 304,
                "product_name": "Stock D",
                "trade_margin": 30.75
            },
            {
                "trade_id": "ad3e4567-e89b-12d3-a456-426614174004",
                "order_id": 105,
                "member_id": 2005,
                "trade_date_time": "2024-12-08T17:00:00",
                "trade_price": 500.00,
                "trade_qty": 5,
                "side": "Buy",
                "market_id": 305,
                "product_name": "Stock E",
                "trade_margin": 50.00
            }
        ]);
    });
};

module.exports = tradeModel;