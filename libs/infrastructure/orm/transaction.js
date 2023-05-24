const knex=require('../config/database');
const {Model}=require('objection');
Model.knex(knex);

class Transaction extends Model{
    static get tableName(){
        return 'airsoft_trans';
    }

    static get relationMappings(){
        const DetailTransaction=require("./detail_transaction");
        return {
            detail:{
                relation:Model.HasManyRelation,
                modelClass:DetailTransaction,
                join:{
                    from: 'airsoft_trans.id',
                    to:'detail_airsoft_trans.trans_id'
                }
            }
        }
    }
}

module.exports=Transaction;