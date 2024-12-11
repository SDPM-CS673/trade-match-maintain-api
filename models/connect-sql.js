const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const config  = require('../config.json');

console.log("init-db.js is running");

// Supabase connection string
const connectionString = 'postgresql://postgres.luittvqvnpygmcifdtwq:CS673@unitrade@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

const client = new Client({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false, // Ensure SSL is enabled and certificate is verified
        ca: fs.readFileSync(config.database.sql.caCertPath).toString(),
    }
});

// Connect to PostgreSQL server
client.connect().then(async () => {
    console.log("Connected to PostgreSQL server.");
    await client.end();
}).catch(err => {
    console.error('Failed to connect to PostgreSQL:', err);
    client.end();
});
