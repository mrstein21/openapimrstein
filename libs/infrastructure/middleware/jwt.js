var jwt=require('jsonwebtoken');
var controller=require('../../interfaces/controllers/controller');

module.exports={
    verify_jwt:function(){
        return (req,res,next)=>{
          if(req.path=="/test_upload" || req.path=="/test_post_json"){
            next();
          }else{
            const bearer=req.headers.authorization;
            if(typeof bearer!='undefined'){
              const result=bearer.split(' ');
              const token=result[1];
              jwt.verify(token,'secretkey',(err,authData)=>{
                if(err){
                    return controller.responseProcessFailed(403,res,"Invalid Token");
               }
               else{
                req.data=authData;
                next();
              }
              });
            }
            else{
              return controller.responseProcessFailed(403,res,"Forbidden");
            }
 
          }         
        }
    },
}