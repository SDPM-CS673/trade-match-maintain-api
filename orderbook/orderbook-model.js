const db = require('../models/db');
const common = require('../utils/common');
const orderbookModel = {};

orderbookModel.getOrderList = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT om.*, pc.category_name FROM order_master om JOIN product_category pc ON om.product_category = pc.category_id WHERE om.member_id = '${userId}';`;
        db.query(query).then((result) => {
            // console.log(result);
            resolve(result.rows);
        }).catch((error) => {
            console.error(error);
            reject(error);
        })
    })
}

orderbookModel.addOrder = (data, userId) => {
    return new Promise((resolve, reject) => {
        const order_id = common.generateUUID();
        const query = `INSERT INTO order_master (
            order_id,
            member_id, 
            product_category, 
            product_name, 
            order_type,
            side,
            order_price,
            order_qty, 
            order_status, 
            allocated_qty, 
            order_margin
            ) 
            VALUES (
            '${order_id}',
                '${userId}',                     
                '${data.product_category}',                
                '${data.product_name}',               
                '${data.order_type}',  
                '${data.side}',
                '${data.order_price}',              
                ${data.order_qty},        
                'OPEN',                    
                ${0},                     
                ${0}                           
        );`
        console.log(query);
        db.query(query).then((result) => {
            resolve(result);
        }).catch((error) => {
            console.error(error);
            reject(error);
        });
    });
}

module.exports = orderbookModel;