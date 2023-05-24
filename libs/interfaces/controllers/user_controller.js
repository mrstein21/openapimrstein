const resultJSON=require('./controller');
const UserUsecase=require('../../usecase/user_usecase');
const user_usecase=new UserUsecase();
const {schemaLogin,schemaRegister}=require('../../infrastructure/validator/user_validator')

module.exports={
    async login(request,response){
       try{
          const{error}=schemaLogin.validate(request.body);
          if(error!=null){
            return resultJSON.responseProcessFailed(400,response,error.message);
          }
          var data=await user_usecase.login(request.body);
          if(data.message!=null){
             return resultJSON.responseProcessFailed(403,response,data.message);
          }
          return resultJSON.responseOK(response,data);
       }catch(err){
          return resultJSON.responseFailure(response,err);
       }
    },
    async register(request,response){
        try{
          const{error}=schemaRegister.validate(request.body);
          if(error!=null){
            return resultJSON.responseProcessFailed(400,error.message);
          }
          var data=await user_usecase.register(request.body); 
          if(data.message!=null){
            return resultJSON.responseProcessFailed(403,response,data.message);
          } 
          return resultJSON.responseOK(response,data);
        }catch(err){
          return resultJSON.responseFailure(response,err);
        }
    }
}