const Transaction=require('../orm/transaction');

module.exports=class {
    async getTransaction(page){
        var data=await  Transaction.query().page(page-1,10);
        return data;
    }

    async detailTransaction(id){
        var data=await Transaction.query().withGraphFetched("[detail.airsoft]").findById(id);
        return data;
    }

    async doTransaction(params){
        var data=await Transaction.transaction(async(trx)=>{
            const data=await Transaction.query(trx).insertGraph(params);
            return data;
         });
         return data;
    }
}
