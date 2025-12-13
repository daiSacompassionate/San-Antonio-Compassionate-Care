// backend/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

// Debug: Log database connection configuration
console.log('🔍 Database Configuration:');
console.log('   PGHOST:', process.env.PGHOST || 'localhost (DEFAULT)');
console.log('   PGPORT:', process.env.PGPORT || '5432 (DEFAULT)');
console.log('   PGUSER:', process.env.PGUSER || 'NOT SET');
console.log('   PGDATABASE:', process.env.PGDATABASE || 'NOT SET');
console.log('   PGPASSWORD:', process.env.PGPASSWORD ? '***SET***' : 'NOT SET');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
});

pool.on('connect', () => {
    console.log('Connected to Postgres');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
