const knex=require('../config/database');
const {Model}=require('objection');
Model.knex(knex);

class User extends Model{
    static get tableName(){
        return 'users';
    }
}

module.exports=User;