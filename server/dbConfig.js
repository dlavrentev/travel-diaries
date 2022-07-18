const dbEngine = process.env.DB_ENVIRORNMENT || 'develeopment' ;
const config = require('./knexfile')[dbEngine];

module.exports = require('knex')(config);