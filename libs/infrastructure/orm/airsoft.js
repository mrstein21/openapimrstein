const knex=require('../config/database');
const {Model}=require('objection');
Model.knex(knex);

class Airsoft extends Model{
    static get tableName(){
        return 'airsoft';
    }

}

module.exports=Airsoft;