const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'XXX',
        port: null,
        user: 'XXX',
        password: null,
        database: 'XXX'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex