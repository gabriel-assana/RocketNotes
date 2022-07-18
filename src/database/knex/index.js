const config = require("../../../knexfile");
const knex = require("knex")

const connections = knex(config.development);


module.exports = connections;