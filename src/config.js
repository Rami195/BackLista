require('dotenv').config();

module.exports = {
    databaseUrl: process.env.DATABASE_URL,
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_DB,
    }
};
