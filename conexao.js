const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '140515',
        database: 'exerresolvido02'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex