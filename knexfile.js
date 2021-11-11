module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_DBNAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    }
}
