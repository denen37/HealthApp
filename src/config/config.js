const dotenv = require('dotenv');
dotenv.config();

const env = process.env;

const config = {
    development: {
        username: env.USERNAME,
        password: env.PASSWORD,
        database: env.DATABASE,
        host: env.HOST,
        port: env.PORT,
        dialect: env.DIALECT,
    },
    test: {
        username: env.USERNAME,
        password: env.PASSWORD,
        database: env.DATABASE,
        host: env.HOST,
        port: env.PORT,
        dialect: env.DIALECT,
    },
    production: {
        username: env.USERNAME,
        password: env.PASSWORD,
        database: env.DATABASE,
        host: env.HOST,
        port: env.PORT,
        dialect: env.DIALECT,
    },
};

export default config;