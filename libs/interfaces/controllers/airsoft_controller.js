const AirsoftUseCase=require('../../usecase/airsoft_usecase');
const airsoft_usecase=new AirsoftUseCase();
const resultJSON=require('./controller');
const uploadFile=require('../../infrastructure/multer/upload');
const {schemaEditAirsoft, schemaTestUpload, schemaPostJSON}=require('../../infrastructure/validator/airsoft_validator');

module.exports={
    async AddAirsoftRequest(request,response){
      uploadFile(request,response).then(async (_)=>{
            try{
                if(request.file==null){
                   return resultJSON.responseProcessFailed(400,response,"You must attach an image !"); 
                } 
                var requestX={
                    name:request.body.name,
                    description:request.body.description,
                    price:request.body.price,
                    photo:request.file.filename,
                }
                var data=await airsoft_usecase.addAirsoft(requestX);
                return resultJSON.responseOK(response,data);
            }catch(err){
                return resultJSON.responseFailure(response,err);
            }
        }).catch((err)=>{
            return resultJSON.responseProcessFailed(400,response,err.message);
        })       
    },
    async UploadTestFile(request,response){
         uploadFile(request,response).then(async (_)=>{
            if(request.file==null){
                const {error}=schemaTestUpload.validate(request.body);
                if(error!=null){
                  return resultJSON.responseProcessFailed(400,response,error.message)    
                }
               }else{
                   return resultJSON.responseOK(response,{
                       "caption":request.body.caption,
                       "image_file":request.file.filename
                   })
               }  
         }).catch((e)=>{
            return resultJSON.responseProcessFailed(400,response,e.toString())     
         })
    },
    async PostTestJSON(request,response){
        const {error}=schemaPostJSON.validate(request.body);
        if(error!=null){
            return resultJSON.responseProcessFailed(400,response,error.message)    
         }else{
            return resultJSON.responseOK(response,request.body.items);
         }
    },
    async EditAirsoftRequest(request,response){
       uploadFile(request,response).then(async (_)=>{
          try{ 
             var requestX={
                id:request.body.id, 
                name:request.body.name,
                description:request.body.description,
                price:request.body.price,
             }
            if(request.file==null){
              const {error}=schemaEditAirsoft.validate(requestX);
              if(error!=null){
                return resultJSON.responseProcessFailed(400,response,error.message)    
              }
             }else{
                requestX.photo=request.file.filename;
             }

            var message=await airsoft_usecase.editAirsoft(requestX);
            if(message==null){
                return resultJSON.responseProcessFailed(404,response,"Airsoft Not Found")
            }
            return resultJSON.responseOKWithoutData(response,message);        
          }catch(err){
            return resultJSON.responseFailure(response,err);
          }
        }).catch((err)=>{
            return resultJSON.responseProcessFailed(400,response,err.message);
       });
    },
    async GetAirsoftRequest(request,response){
        try{
            var page=request.query.page ?? 1
            var keyword = request.query.name ?? "";
            var data=await airsoft_usecase.getAirsoft(page,keyword);
            return resultJSON.responseOK(response,data);
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    },
    async DeleteAirsoftRequest(request,response){
        try{
            var id=request.params.id;
            var message=await airsoft_usecase.deleteAirsoft(id);
            if(message==null){
               return resultJSON.responseProcessFailed(404,res,"Airsoft Not Found") 
            }
            return resultJSON.responseOKWithoutData(response,message);
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    },
    async GetAirsoftByIdRequest(request,response){
        try{
            var id=request.params.id;
            var data=await airsoft_usecase.getAirsoftById(id);
            if(data==null){
                return resultJSON.responseProcessFailed(404,response,"Airsoft Not Found")
            }
            return resultJSON.responseOK(
                response,
                data
            )
        }catch(err){
            return resultJSON.responseFailure(response,err);
        }
    }
}