var dotenv=require("dotenv");
dotenv.config();
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      user : 'root',
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_DATABASE
    }
  });
  module.exports=knex

