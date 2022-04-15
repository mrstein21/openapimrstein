const knex=require('../config/database');
const {Model}=require('objection');
Model.knex(knex);

class DetailTransaction extends Model{
    static get tableName(){
        return 'detail_airsoft_trans';
    }

    static get relationMappings(){
        const Airsoft=require("./airsoft");
        return {
            airsoft:{
                relation:Model.HasOneRelation,
                modelClass:Airsoft,
                join:{
                    from: 'detail_airsoft_trans.airsoft_id',
                    to:'airsoft.id'
                }
            }
        }
    }

}

module.exports=DetailTransaction;