const { Pool } = require("pg");
const fs = require('fs');
const config = require("../config.json");

const pool = new Pool({
    host: config.database.sql.host,
    user: config.database.sql.user,
    password: `${config.database.sql.password}`,
    database: config.database.sql.name,
    port: config.database.sql.port,
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(config.database.sql.caCertPath).toString(), 
    }
});

module.exports = pool;