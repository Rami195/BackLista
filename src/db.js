const { Pool } = require('pg');
const { databaseUrl, db } = require('./config');

const pool = new Pool({
    connectionString: databaseUrl || `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`,
    ssl: {
        rejectUnauthorized: false // Necesario para Render
    }
});

module.exports = pool;
