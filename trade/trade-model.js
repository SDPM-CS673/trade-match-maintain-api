const db = require("../models/db");
const tradeModel = {};

tradeModel.getTradeList = (userId) => {
    return new Promise((resolve, reject) => {
        // SELECT om.*, pc.category_name FROM order_master om JOIN product_category pc ON om.product_category = pc.category_id;
        const query = ` SELECT om.*, pc.category_name FROM trade_master om JOIN product_category pc ON om.market_id = pc.category_id;`;
        db.query(query).then((result) => {
            resolve(result.rows);
        }).catch((error) => {
            console.error(error);
            reject(error);
        })
    });
};

module.exports = tradeModel;