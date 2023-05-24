const { schemaTransaction } = require('../../infrastructure/validator/transaction_validator');
const TransactionUseCase=require('./../../usecase/transaction_usecase');
const transaction_usecase=new TransactionUseCase();
const resultJSON=require('./controller');
module.exports={
    async GetTransactionRequest(request,response){
        try{
            var page=request.query.page ?? 1
            var data=await transaction_usecase.getTransaction(page);
            return resultJSON.responseOK(response,data);
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    },
    async GetDetailTransaction(request,response){
        try{
            var id=request.params.id;
            var data=await transaction_usecase.getDetailTransaction(id);
            if(data.message!=null){
                return resultJSON.responseProcessFailed(404,response,"Transaction ID Not Found")    
            }
            return resultJSON.responseOK(response,data);
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    },
    async doTransaction(request,response){
        try{
            const {error}=schemaTransaction.validate(request.body);
            if(error!=null){
                return resultJSON.responseProcessFailed(400,response,error.message)    
            }
            var data=await transaction_usecase.doTransaction(request.body.items);
            if(data.message!=null){
                return resultJSON.responseProcessFailed(400,response,data.message)    
            }
            return resultJSON.responseOK(response,data);
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    }
}