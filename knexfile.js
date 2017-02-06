// Update with your config settings.
'use strict';
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/classifieds_dev'
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/classifieds_test'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }

}