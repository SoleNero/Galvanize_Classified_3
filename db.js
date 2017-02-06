'use strict';
var config = require('../knexfile.js')[process.env.NODE_ENV || 'development']);
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);


// module.exports = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development'])